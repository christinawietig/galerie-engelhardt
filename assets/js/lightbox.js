var currentIndex = 0;
var galleryImages = Array.from(document.querySelectorAll('.art-piece img'));
var lightbox = document.getElementById('lightbox');
var lightboxImg = document.getElementById('lightbox-img');
var lastFocused = null;

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
    var img = galleryImages[index];
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

document.addEventListener('keydown', function(e) {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigateLightbox(-1);
    if (e.key === 'ArrowRight') navigateLightbox(1);
    if (e.key === 'Tab') {
        var focusable = lightbox.querySelectorAll('button');
        var first = focusable[0];
        var last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
        }
    }
});
