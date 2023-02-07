import './style.css'


let slides = document.querySelectorAll('#slides .slide');
let dots = document.querySelectorAll('#dots .dot');
var currentSlide = 0;

function nextSlide() {
  slides[currentSlide].classList.remove('active-slide');
  dots[currentSlide].classList.remove('active-dot');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active-slide');
  dots[currentSlide].classList.add('active-dot');
}


dots.forEach(function(dot, index) {
  dot.addEventListener('click', function() {
    slides[currentSlide].classList.remove('active-slide');
    dots[currentSlide].classList.remove('active-dot');
    currentSlide = index;
    slides[currentSlide].classList.add('active-slide');
    dots[currentSlide].classList.add('active-dot');
  });
});


slides[currentSlide].classList.add('active-slide');
dots[currentSlide].classList.add('active-dot');

// console.log("slides",slides)