window.onscroll = function(){
  var navbar = document.querySelector('.navbar')
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
};

const burgerMenu = document.getElementById('burger-menu');
const sideMenu = document.getElementById('side-menu');
const closeMenu = document.getElementById('close-menu');
const menuOverlay = document.getElementById('menu-overlay');

// Open menu
burgerMenu.addEventListener('click', () => {
    sideMenu.classList.add('active');
    menuOverlay.classList.add('active');
});

// Close menu with close button
closeMenu.addEventListener('click', () => {
    sideMenu.classList.remove('active');
    menuOverlay.classList.remove('active');
});

// Close menu with overlay click
menuOverlay.addEventListener('click', () => {
    sideMenu.classList.remove('active');
    menuOverlay.classList.remove('active');
});

// carousel
let currentSlide = 0;
const items = document.querySelectorAll('.carousel-item');
const totalSlides = items.length;

function showSlide(index) {
  const carouselInner = document.querySelector('.carousel-inner');
  const slideWidth = items[0].offsetWidth;
  carouselInner.style.transform = `translateX(-${index * slideWidth}px)`;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
}

