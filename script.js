document.querySelectorAll('.slider-container').forEach((container) => {
    const slider = container.querySelector('.slider');
    const cards = container.querySelectorAll('.card');
    const nextBtn = container.querySelector('.next');
    const prevBtn = container.querySelector('.prev');

    let index = 0;
    const totalSlides = cards.length;

    function updateSlider() {
        slider.style.transform = `translateX(-${index * 100}%)`;
    }

    nextBtn.addEventListener('click', () => {
        index = (index + 1) % totalSlides; // Loop back to first
        updateSlider();
    });

    prevBtn.addEventListener('click', () => {
        index = (index - 1 + totalSlides) % totalSlides; // Loop back to last
        updateSlider();
    });
});

// for zoom effect of card
function zoomEffect(element) {
    document.querySelectorAll('.service-card').forEach(card => {
        card.classList.remove('zoom-effect');
    });
    element.classList.add('zoom-effect');
}

