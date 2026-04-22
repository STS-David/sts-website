(function initEffects() {
    const reveals = document.querySelectorAll(".reveal");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function revealIfAboveFold(item) {
        const rect = item.getBoundingClientRect();
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        const visibleTop = rect.top <= viewportHeight * 0.92;
        const visibleBottom = rect.bottom >= 0;

        if (visibleTop && visibleBottom) {
            item.classList.add("is-visible");
            return true;
        }

        return false;
    }

    if (!reveals.length) {
        return;
    }

    if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
        reveals.forEach((item) => item.classList.add("is-visible"));
    } else {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.16 });

        reveals.forEach((item, index) => {
            item.style.transitionDelay = `${Math.min(index % 4, 3) * 60}ms`;

            if (revealIfAboveFold(item)) {
                return;
            }

            observer.observe(item);
        });

        window.addEventListener("pageshow", () => {
            reveals.forEach((item) => {
                revealIfAboveFold(item);
            });
        });
    }

    const interactiveSurfaces = document.querySelectorAll(".card.glass-surface, .terminal-window.glass-surface, .faq-list.glass-surface");

    interactiveSurfaces.forEach((surface) => {
        surface.classList.add("glass-surface--interactive");

        if (!surface.querySelector(".prismatic-glare")) {
            const glare = document.createElement("div");
            glare.className = "prismatic-glare";
            surface.appendChild(glare);
        }

        if (prefersReducedMotion) {
            return;
        }

        surface.addEventListener("mousemove", (event) => {
            const rect = surface.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            const rotateX = ((y - rect.height / 2) / rect.height) * -8;
            const rotateY = ((x - rect.width / 2) / rect.width) * 10;

            surface.style.setProperty("--glare-x", `${x}px`);
            surface.style.setProperty("--glare-y", `${y}px`);
            surface.style.setProperty("--card-rotate-x", `${rotateX}deg`);
            surface.style.setProperty("--card-rotate-y", `${rotateY}deg`);
            surface.classList.add("is-tilting");
        });

        surface.addEventListener("mouseleave", () => {
            surface.style.setProperty("--card-rotate-x", "0deg");
            surface.style.setProperty("--card-rotate-y", "0deg");
            surface.classList.remove("is-tilting");
        });
    });
})();
