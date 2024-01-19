document.addEventListener("DOMContentLoaded", function () {
    const track = document.getElementById("carouselTrack");
    const items = document.querySelectorAll(".carousel-item");
    let currentIndex = 0;

    document.getElementById("nextBtn").addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    });

    document.getElementById("prevBtn").addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    });

    function updateCarousel() {
        const newPosition = -currentIndex * 100 + "%";
        track.style.transform = "translateX(" + newPosition + ")";
    }
});
