const slides1 = document.querySelector('.slides1');
const images = document.querySelectorAll('.slides1 img');

let currentIndex = 0;
const imageCount = images.length;

function showNextImage() {
    currentIndex++;
    if (currentIndex >= imageCount) {
        currentIndex = 0;
    }
    const offset = -currentIndex * 100;
    slides1.style.transform = `translateX(${offset}%)`;
}

setInterval(showNextImage, 3000);