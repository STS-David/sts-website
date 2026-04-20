(function initMobileNav() {
    document.addEventListener("DOMContentLoaded", () => {
        const nav = document.querySelector("[data-nav-root]");

        if (!nav) {
            return;
        }

        const toggle = nav.querySelector("[data-nav-toggle]");
        const menu = nav.querySelector("[data-nav-menu]");
        const mobileLinks = nav.querySelectorAll("[data-nav-menu] a[href]");

        if (!toggle || !menu) {
            return;
        }

        function closeMenu() {
            toggle.setAttribute("aria-expanded", "false");
            menu.hidden = true;
        }

        function openMenu() {
            toggle.setAttribute("aria-expanded", "true");
            menu.hidden = false;
        }

        toggle.addEventListener("click", () => {
            const expanded = toggle.getAttribute("aria-expanded") === "true";

            if (expanded) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        mobileLinks.forEach((link) => {
            link.addEventListener("click", closeMenu);
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                closeMenu();
            }
        });

        document.addEventListener("click", (event) => {
            if (menu.hidden) {
                return;
            }

            if (!nav.contains(event.target)) {
                closeMenu();
            }
        });

        window.addEventListener("resize", () => {
            if (window.innerWidth > 900) {
                closeMenu();
            }
        });

        closeMenu();
    });
})();
