import { renderContent } from './content_router.js';
import { initTerminal } from './terminal.js';

document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    const currentHash = window.location.hash.replace('#', '') || 'home';
    renderPage(currentHash, false);

    window.navigateTo = (pageId) => {
        if (window.location.hash.replace('#', '') === pageId) return;
        window.location.hash = pageId;
        renderPage(pageId, true);
    };

    function renderPage(pageId, animate = true) {
        const contentArea = document.getElementById('content-area');
        const overlay = document.getElementById('transition-overlay');
        
        const transition = () => {
            contentArea.innerHTML = renderContent(pageId);
            window.scrollTo({ top: 0, behavior: 'instant' });
            lucide.createIcons();
            
            applyScrollAnimations();
            initLiquidGlass();
            initFaqInteractivity(); 
            
            if (pageId === 'home') {
                initTerminal();
            }

            gsap.to(overlay, { opacity: 0, duration: 0.8, ease: "power2.out" });
        };

        if (animate) {
            gsap.to(overlay, { 
                opacity: 1, 
                duration: 0.4, 
                ease: "power2.inOut",
                onComplete: transition 
            });
        } else {
            transition();
        }
    }
});

function initLiquidGlass() {
    const cards = document.querySelectorAll('.liquid-glass');
    cards.forEach(card => {
        if (card.querySelector('.prismatic-glare')) return;

        const glare = document.createElement('div');
        glare.className = 'prismatic-glare';
        card.appendChild(glare);

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 30;
            const rotateY = (centerX - x) / 30;

            gsap.to(card, {
                rotateX: rotateX,
                rotateY: rotateY,
                duration: 0.6,
                ease: "power2.out"
            });

            gsap.to(glare, {
                x: x - 75,
                y: y - 75,
                opacity: 1,
                duration: 0.3
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, { rotateX: 0, rotateY: 0, duration: 1, ease: "elastic.out(1, 0.4)" });
            gsap.to(glare, { opacity: 0, duration: 0.5 });
        });
    });
}

function initFaqInteractivity() {
    const items = document.querySelectorAll('.faq-shell-item');
    items.forEach(item => {
        const header = item.querySelector('.faq-shell-header');
        if (!header) return;
        
        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            items.forEach(i => i.classList.remove('active'));
            if (!isActive) item.classList.add('active');
        });
    });
}

function applyScrollAnimations() {
    ScrollTrigger.getAll().forEach(t => t.kill());
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((el, i) => {
        gsap.fromTo(el, 
            { opacity: 0, y: 30 },
            {
                opacity: 1, y: 0, duration: 1, ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 90%",
                    toggleActions: "play none none none"
                },
                delay: (i % 4) * 0.05
            }
        );
    });
}
