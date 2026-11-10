// script.js - Animações e interatividade leve
document.addEventListener("DOMContentLoaded", () => {
    // Rolagem suave para âncoras internas
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Efeito de elevação sutil no scroll para o mockup hero
    const heroMockup = document.querySelector(".hero-mockup-wrapper");
    if (heroMockup) {
        window.addEventListener("scroll", () => {
            const scrolled = window.scrollY;
            if (scrolled < 600) {
                heroMockup.style.transform = `translateY(${scrolled * -0.06}px)`;
            }
        });
    }
});
