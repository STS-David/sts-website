(function initPageTransitions() {
    function clearOverlay() {
        const overlay = document.querySelector("[data-transition-overlay]");

        if (!overlay) {
            return;
        }

        requestAnimationFrame(() => {
            overlay.classList.remove("is-active");
        });
    }

    document.addEventListener("DOMContentLoaded", () => {
        const overlay = document.querySelector("[data-transition-overlay]");
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (!overlay) {
            return;
        }

        clearOverlay();

        function isModifiedClick(event) {
            return event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0;
        }

        function normalizeRoute(url) {
            const pathname = url.pathname.endsWith("/") ? url.pathname : `${url.pathname}/`;
            return `${pathname}${url.search}`;
        }

        document.addEventListener("click", (event) => {
            if (event.defaultPrevented || isModifiedClick(event)) {
                return;
            }

            const link = event.target.closest("a[href]");

            if (!link) {
                return;
            }

            const rawHref = link.getAttribute("href");

            if (
                !rawHref ||
                rawHref.startsWith("#") ||
                rawHref.startsWith("mailto:") ||
                rawHref.startsWith("tel:") ||
                rawHref.startsWith("javascript:") ||
                link.hasAttribute("download") ||
                link.target === "_blank" ||
                link.rel === "external"
            ) {
                return;
            }

            const destination = new URL(rawHref, window.location.href);

            if (destination.origin !== window.location.origin) {
                return;
            }

            if (normalizeRoute(destination) === normalizeRoute(new URL(window.location.href))) {
                return;
            }

            event.preventDefault();

            if (prefersReducedMotion) {
                window.location.href = destination.href;
                return;
            }

            overlay.classList.add("is-active");

            window.setTimeout(() => {
                window.location.href = destination.href;
            }, 220);
        });
    });

    window.addEventListener("pageshow", clearOverlay);
    window.addEventListener("popstate", clearOverlay);
})();
