document.addEventListener("DOMContentLoaded", function () {
    const carouselInner = document.querySelector('.carousel-inner');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-control.prev');
    const nextButton = document.querySelector('.carousel-control.next');
    let currentIndex = 0;
    let interval;

    function showImage(index) {
        currentIndex = (index + carouselItems.length) % carouselItems.length;
        carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function showNextImage() {
        showImage(currentIndex + 1);
    }

    function showPrevImage() {
        showImage(currentIndex - 1);
    }

    function startCarousel() {
        interval = setInterval(showNextImage, 3000);
    }

    function stopCarousel() {
        clearInterval(interval);
    }

    nextButton.addEventListener('click', () => {
        stopCarousel();
        showNextImage();
        startCarousel();
    });

    prevButton.addEventListener('click', () => {
        stopCarousel();
        showPrevImage();
        startCarousel();
    });

    startCarousel();
});// JavaScript Document