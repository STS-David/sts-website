(function initSTSConsentManager() {
    const COOKIE_NAME = (window.STSConsentBootstrap && window.STSConsentBootstrap.cookieName) || "sts_cookie_consent";
    const STORAGE_KEY = (window.STSConsentBootstrap && window.STSConsentBootstrap.storageKey) || "sts_cookie_consent";
    const DEFAULT_CONSENT = (window.STSConsentBootstrap && window.STSConsentBootstrap.defaultConsent) || {
        necessary: true,
        statistics: false,
        marketing: false,
        decision: null,
    };
    const CONSENT_MAX_AGE = 60 * 60 * 24 * 180;
    const CONSENT_EVENT = "sts:consent-updated";
    const SECTION_ROUTES = new Set([
        "home",
        "solutions",
        "pricing",
        "about",
        "contact",
        "faq",
        "impressum",
        "datenschutz",
        "agb",
        "cookies",
    ]);

    function getBasePrefix() {
        const segments = window.location.pathname.split("/").filter(Boolean);
        if (segments.length === 0) {
            return "";
        }

        const tail = segments[segments.length - 1] || "";
        const routeSegment = tail.endsWith(".html") ? segments[segments.length - 2] || "" : tail;
        const pagesIndex = segments.lastIndexOf("pages");

        if (pagesIndex !== -1 && SECTION_ROUTES.has(routeSegment)) {
            return "../".repeat(segments.length - pagesIndex - (tail.endsWith(".html") ? 1 : 0));
        }

        if (!SECTION_ROUTES.has(routeSegment)) {
            return "";
        }

        return "../";
    }

    function getConsentState() {
        return {
            ...DEFAULT_CONSENT,
            ...(window.STSConsentState || {}),
            necessary: true,
        };
    }

    function hasStoredConsent(consent) {
        return consent.decision === "necessary" || consent.decision === "all" || consent.decision === "custom";
    }

    function persistConsent(consent) {
        const serialized = JSON.stringify({
            necessary: true,
            statistics: Boolean(consent.statistics),
            marketing: Boolean(consent.marketing),
            decision: consent.decision,
        });
        const encodedValue = encodeURIComponent(serialized);

        document.cookie = `${COOKIE_NAME}=${encodedValue}; Max-Age=${CONSENT_MAX_AGE}; Path=/; SameSite=Lax`;

        try {
            window.localStorage.setItem(STORAGE_KEY, serialized);
        } catch (error) {
            // Ignore storage failures and rely on the cookie.
        }

        window.STSConsentState = {
            necessary: true,
            statistics: Boolean(consent.statistics),
            marketing: Boolean(consent.marketing),
            decision: consent.decision,
        };
        document.documentElement.dataset.stsConsentState = consent.decision;
        document.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: window.STSConsentState }));
    }

    function categoryAllowed(consent, category) {
        if (!category || category === "necessary") {
            return true;
        }

        return Boolean(consent[category]);
    }

    function activateOptionalScripts(consent) {
        const inertScripts = document.querySelectorAll('script[type="text/plain"][data-consent]:not([data-consent-activated])');

        inertScripts.forEach((script) => {
            const categories = script.dataset.consent
                .split(",")
                .map((value) => value.trim())
                .filter(Boolean);

            const allowed = categories.every((category) => categoryAllowed(consent, category));

            if (!allowed) {
                return;
            }

            const liveScript = document.createElement("script");

            Array.from(script.attributes).forEach((attribute) => {
                if (attribute.name === "type" || attribute.name === "data-consent" || attribute.name === "data-src" || attribute.name === "data-consent-activated") {
                    return;
                }

                liveScript.setAttribute(attribute.name, attribute.value);
            });

            liveScript.type = "text/javascript";

            if (script.dataset.src) {
                liveScript.src = script.dataset.src;
            } else {
                liveScript.textContent = script.textContent;
            }

            script.dataset.consentActivated = "true";
            script.parentNode.insertBefore(liveScript, script.nextSibling);
        });
    }

    function renderConsentUI() {
        const basePrefix = getBasePrefix();
        const wrapper = document.createElement("div");

        wrapper.className = "consent-root";
        wrapper.innerHTML = `
            <div class="consent-backdrop" data-consent-close hidden></div>
            <section class="consent-banner glass-surface" data-consent-banner role="dialog" aria-modal="true" aria-labelledby="consent-title" aria-describedby="consent-body" hidden>
                <div class="consent-banner-copy">
                    <span class="section-label">Datenschutz</span>
                    <h2 class="consent-title" id="consent-title">Datenschutz & Cookies</h2>
                    <p class="consent-body" id="consent-body">Wir verwenden technisch notwendige Cookies, damit diese Website sicher und funktionsf&auml;hig betrieben werden kann. Optionale Cookies oder &auml;hnliche Technologien werden nur nach Ihrer Auswahl geladen.</p>
                    <p class="consent-helper">Weitere Informationen finden Sie in unserer <a class="nav-link" href="${basePrefix}datenschutz/">Datenschutzerkl&auml;rung</a> und <a class="nav-link" href="${basePrefix}cookies/">Cookie-Richtlinie</a>.</p>
                </div>
                <div class="consent-actions">
                    <button class="secondary-cta consent-action" type="button" data-consent-decline>Nur notwendige</button>
                    <button class="primary-cta consent-action" type="button" data-consent-accept>Alle akzeptieren</button>
                    <button class="consent-link-button" type="button" data-consent-open>Einstellungen</button>
                </div>
            </section>
            <section class="consent-panel glass-surface" data-consent-panel role="dialog" aria-modal="true" aria-labelledby="consent-settings-title" hidden>
                <div class="consent-panel-head">
                    <div>
                        <span class="section-label">Datenschutz</span>
                        <h2 class="consent-title" id="consent-settings-title">Cookie-Einstellungen</h2>
                    </div>
                    <button class="consent-panel-close" type="button" aria-label="Cookie-Einstellungen schlie&szlig;en" data-consent-close>&times;</button>
                </div>
                <p class="consent-body">Hier k&ouml;nnen Sie festlegen, welche Kategorien auf dieser Website aktiviert werden d&uuml;rfen. Technisch notwendige Funktionen bleiben immer aktiv, da sie f&uuml;r den sicheren und ordnungsgem&auml;&szlig;en Betrieb erforderlich sind.</p>
                <div class="consent-category-list">
                    <label class="consent-category consent-category--locked">
                        <span class="consent-category-main">
                            <span class="consent-category-copy">
                                <strong>Notwendig</strong>
                                <span>Erforderlich f&uuml;r Grundfunktionen der Website, Sicherheitsmechanismen, Formularverarbeitung und die Speicherung Ihrer Datenschutzeinstellungen. Diese Kategorie kann nicht deaktiviert werden.</span>
                            </span>
                            <span class="consent-toggle">
                                <input type="checkbox" checked disabled>
                                <span class="consent-toggle-ui"></span>
                            </span>
                        </span>
                    </label>
                    <label class="consent-category">
                        <span class="consent-category-main">
                            <span class="consent-category-copy">
                                <strong>Statistik</strong>
                                <span>Hilft uns zu verstehen, wie die Website genutzt wird, um Struktur, Inhalte und technische Bereitstellung zu verbessern. Diese Kategorie wird nur nach Ihrer Zustimmung aktiviert.</span>
                            </span>
                            <span class="consent-toggle">
                                <input type="checkbox" data-consent-setting="statistics">
                                <span class="consent-toggle-ui"></span>
                            </span>
                        </span>
                    </label>
                    <label class="consent-category">
                        <span class="consent-category-main">
                            <span class="consent-category-copy">
                                <strong>Marketing</strong>
                                <span>Erm&ouml;glicht den Einsatz externer Dienste oder Tracking-Technologien f&uuml;r Reichweite, Wiedererkennung oder Marketingzwecke. Diese Kategorie wird nur nach Ihrer Zustimmung aktiviert.</span>
                            </span>
                            <span class="consent-toggle">
                                <input type="checkbox" data-consent-setting="marketing">
                                <span class="consent-toggle-ui"></span>
                            </span>
                        </span>
                    </label>
                </div>
                <div class="consent-actions consent-actions--panel">
                    <button class="secondary-cta consent-action" type="button" data-consent-save>Auswahl speichern</button>
                    <button class="primary-cta consent-action" type="button" data-consent-accept>Alle akzeptieren</button>
                    <button class="consent-link-button" type="button" data-consent-decline>Nur notwendige</button>
                </div>
            </section>
            <button class="consent-toolbar" type="button" data-open-cookie-settings data-consent-toolbar hidden>Cookie-Einstellungen</button>
        `;

        document.body.appendChild(wrapper);
        return wrapper;
    }

    document.addEventListener("DOMContentLoaded", () => {
        const root = renderConsentUI();
        const banner = root.querySelector("[data-consent-banner]");
        const panel = root.querySelector("[data-consent-panel]");
        const backdrop = root.querySelector("[data-consent-close][hidden]");
        const toolbar = root.querySelector("[data-consent-toolbar]");
        const settingsInputs = root.querySelectorAll("[data-consent-setting]");
        const reopenLinks = document.querySelectorAll("[data-open-cookie-settings]");

        function syncSettings(consent) {
            settingsInputs.forEach((input) => {
                input.checked = Boolean(consent[input.dataset.consentSetting]);
            });
        }

        function openBannerOnly() {
            root.classList.add("is-visible");
            banner.hidden = false;
            panel.hidden = true;
            if (backdrop) {
                backdrop.hidden = true;
            }
            if (toolbar) {
                toolbar.hidden = true;
            }
        }

        function openSettings() {
            root.classList.add("is-visible");
            banner.hidden = true;
            panel.hidden = false;
            if (backdrop) {
                backdrop.hidden = false;
            }
            if (toolbar) {
                toolbar.hidden = true;
            }
        }

        function closeAll() {
            root.classList.remove("is-visible");
            banner.hidden = true;
            panel.hidden = true;
            if (backdrop) {
                backdrop.hidden = true;
            }
            if (toolbar) {
                toolbar.hidden = !hasStoredConsent(getConsentState());
            }
        }

        function applyConsent(consent) {
            persistConsent(consent);
            activateOptionalScripts(consent);
            closeAll();
        }

        const initialConsent = getConsentState();
        syncSettings(initialConsent);

        if (!hasStoredConsent(initialConsent)) {
            openBannerOnly();
        } else {
            activateOptionalScripts(initialConsent);
            closeAll();
        }

        root.querySelectorAll("[data-consent-open]").forEach((button) => {
            button.addEventListener("click", openSettings);
        });

        root.querySelectorAll("[data-consent-close]").forEach((button) => {
            button.addEventListener("click", () => {
                if (hasStoredConsent(getConsentState())) {
                    closeAll();
                } else {
                    openBannerOnly();
                }
            });
        });

        root.querySelectorAll("[data-consent-decline]").forEach((button) => {
            button.addEventListener("click", () => {
                const consent = {
                    necessary: true,
                    statistics: false,
                    marketing: false,
                    decision: "necessary",
                };
                syncSettings(consent);
                applyConsent(consent);
            });
        });

        root.querySelectorAll("[data-consent-accept]").forEach((button) => {
            button.addEventListener("click", () => {
                const consent = {
                    necessary: true,
                    statistics: true,
                    marketing: true,
                    decision: "all",
                };
                syncSettings(consent);
                applyConsent(consent);
            });
        });

        const saveButton = root.querySelector("[data-consent-save]");
        if (saveButton) {
            saveButton.addEventListener("click", () => {
                const consent = {
                    necessary: true,
                    statistics: Boolean(root.querySelector('[data-consent-setting="statistics"]')?.checked),
                    marketing: Boolean(root.querySelector('[data-consent-setting="marketing"]')?.checked),
                    decision: "custom",
                };

                applyConsent(consent);
            });
        }

        reopenLinks.forEach((link) => {
            link.addEventListener("click", (event) => {
                event.preventDefault();
                syncSettings(getConsentState());
                openSettings();
            });
        });

        document.addEventListener("keydown", (event) => {
            if (event.key !== "Escape" || !root.classList.contains("is-visible")) {
                return;
            }

            if (hasStoredConsent(getConsentState())) {
                closeAll();
            } else {
                openBannerOnly();
            }
        });

        document.addEventListener(CONSENT_EVENT, (event) => {
            syncSettings(event.detail || getConsentState());
        });
    });
})();
