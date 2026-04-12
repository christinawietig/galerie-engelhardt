const galleryImages = Array.from(document.querySelectorAll('.art-piece img'));
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
let currentIndex = 0;
let lastFocused = null;

function openLightbox(img) {
    lastFocused = document.activeElement;
    currentIndex = galleryImages.indexOf(img);
    showImage(currentIndex);
    lightbox.setAttribute('aria-hidden', 'false');
    lightbox.classList.add('active');
    lightbox.querySelector('.lightbox-close').focus();
    document.body.style.overflow = 'hidden';
}

function showImage(index) {
    const img = galleryImages[index];
    lightboxImg.src = img.dataset.full || img.src;
    lightboxImg.alt = img.alt;
}

function navigateLightbox(direction) {
    currentIndex = (currentIndex + direction + galleryImages.length) % galleryImages.length;
    showImage(currentIndex);
}

function closeLightbox() {
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocused) lastFocused.focus();
}

// Image click → lightbox
galleryImages.forEach((img) => {
    img.closest('.art-button').addEventListener('click', () => openLightbox(img));
});

// Lightbox controls
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
});

lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
lightbox.querySelector('.lightbox-prev').addEventListener('click', () => navigateLightbox(-1));
lightbox.querySelector('.lightbox-next').addEventListener('click', () => navigateLightbox(1));

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigateLightbox(-1);
    if (e.key === 'ArrowRight') navigateLightbox(1);
    if (e.key === 'Tab') {
        const focusable = lightbox.querySelectorAll('button');
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
        }
    }
});
