const nav = document.querySelector('nav[aria-label="Hauptnavigation"]');
const header = document.querySelector('header');

const observer = new IntersectionObserver((entries) => {
    nav.classList.toggle('visible', !entries[0].isIntersecting);
}, { threshold: 0 });

observer.observe(header);
