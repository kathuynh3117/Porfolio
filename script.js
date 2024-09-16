function initSlider(containerId) {
    let currentIndex = 0;
    const container = document.getElementById(containerId);
    const slides = container.querySelector('.slides');
    const slideWidth = container.querySelector('.slide').offsetWidth;

    function showSlide(index) {
        currentIndex = index;
        slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.children.length) % slides.children.length;
        showSlide(currentIndex);
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.children.length;
        showSlide(currentIndex);
    }

    // Set up initial slide position
    showSlide(currentIndex);

    // Attach event listeners to navigation buttons
    container.querySelector('.prev').addEventListener('click', prevSlide);
    container.querySelector('.next').addEventListener('click', nextSlide);
}

// Initialize each slider
initSlider('slider1');
initSlider('slider2');
initSlider('slider3');
initSlider('slider4');
initSlider('slider5');
initSlider('slider6');
initSlider('slider7');
initSlider('slider8');
initSlider('slider9');