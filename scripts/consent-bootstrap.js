(function initSTSConsentBootstrap() {
    const COOKIE_NAME = "sts_cookie_consent";
    const STORAGE_KEY = "sts_cookie_consent";
    const DEFAULT_CONSENT = {
        necessary: true,
        statistics: false,
        marketing: false,
        decision: null,
    };

    function parseConsentValue(rawValue) {
        if (!rawValue) {
            return { ...DEFAULT_CONSENT };
        }

        try {
            const parsed = JSON.parse(decodeURIComponent(rawValue));
            return {
                ...DEFAULT_CONSENT,
                ...parsed,
                necessary: true,
            };
        } catch (error) {
            return { ...DEFAULT_CONSENT };
        }
    }

    function readConsentCookie() {
        const prefix = `${COOKIE_NAME}=`;
        const cookie = document.cookie
            .split("; ")
            .find((entry) => entry.startsWith(prefix));

        return parseConsentValue(cookie ? cookie.slice(prefix.length) : "");
    }

    function readConsentStorage() {
        try {
            return parseConsentValue(window.localStorage.getItem(STORAGE_KEY) || "");
        } catch (error) {
            return { ...DEFAULT_CONSENT };
        }
    }

    const cookieConsent = readConsentCookie();
    const consent = cookieConsent.decision ? cookieConsent : readConsentStorage();
    const hasStoredConsent = consent.decision === "necessary" || consent.decision === "all" || consent.decision === "custom";

    window.STSConsentBootstrap = {
        cookieName: COOKIE_NAME,
        storageKey: STORAGE_KEY,
        defaultConsent: { ...DEFAULT_CONSENT },
        readConsentCookie,
        readConsentStorage,
    };

    window.STSConsentState = consent;
    document.documentElement.dataset.stsConsentState = hasStoredConsent ? consent.decision : "unset";
})();
