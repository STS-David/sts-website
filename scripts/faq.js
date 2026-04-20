(function initFaq() {
    const faqItems = document.querySelectorAll("[data-faq]");
    const shellItems = document.querySelectorAll(".faq-shell-item");

    faqItems.forEach((item) => {
        const button = item.querySelector(".faq-button");

        if (!button) {
            return;
        }

        button.setAttribute("aria-expanded", "false");

        button.addEventListener("click", () => {
            const open = item.classList.contains("is-open");

            faqItems.forEach((active) => {
                active.classList.remove("is-open");
                const activeButton = active.querySelector(".faq-button");
                if (activeButton) {
                    activeButton.setAttribute("aria-expanded", "false");
                }
            });

            if (!open) {
                item.classList.add("is-open");
                button.setAttribute("aria-expanded", "true");
            }
        });
    });

    shellItems.forEach((item) => {
        const button = item.querySelector(".faq-shell-header");

        if (!button) {
            return;
        }

        button.setAttribute("aria-expanded", "false");

        button.addEventListener("click", () => {
            const open = item.classList.contains("active");

            shellItems.forEach((active) => {
                active.classList.remove("active");
                const activeButton = active.querySelector(".faq-shell-header");
                if (activeButton) {
                    activeButton.setAttribute("aria-expanded", "false");
                }
            });

            if (!open) {
                item.classList.add("active");
                button.setAttribute("aria-expanded", "true");
            }
        });
    });
})();

