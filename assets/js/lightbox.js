var currentIndex = 0;
var galleryImages = Array.from(document.querySelectorAll('.art-piece img'));
var lightbox = document.getElementById('lightbox');
var lightboxImg = document.getElementById('lightbox-img');

function openLightbox(img) {
    currentIndex = galleryImages.indexOf(img);
    showImage(currentIndex);
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function showImage(index) {
    lightboxImg.src = galleryImages[index].dataset.full || galleryImages[index].src;
}

function navigateLightbox(direction) {
    currentIndex = (currentIndex + direction + galleryImages.length) % galleryImages.length;
    showImage(currentIndex);
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

document.addEventListener('keydown', function(e) {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigateLightbox(-1);
    if (e.key === 'ArrowRight') navigateLightbox(1);
});
