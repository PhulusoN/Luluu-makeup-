// Open / close the dropdown menu
const menuButton = document.getElementById('menuButton');
const menu = document.getElementById('menu');

menuButton.addEventListener('click', function () {
  menu.classList.toggle('open');
});

// Carousel arrows
const slides = document.getElementById('slides');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

function scrollSlides(direction) {
  const slideWidth = slides.firstElementChild.offsetWidth + 16; // 16 = the gap
  slides.scrollBy({ left: direction * slideWidth, behavior: 'smooth' });
}

prevButton.addEventListener('click', function () {
  scrollSlides(-1);
});

nextButton.addEventListener('click', function () {
  scrollSlides(1);
});
