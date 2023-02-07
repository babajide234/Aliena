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

// var nextButton = document.querySelector('#next-button');

// nextButton.addEventListener('click', function() {
//   nextSlide();
// });

dots.forEach(function(dot, index) {
  dot.addEventListener('click', function() {
    slides[currentSlide].classList.remove('active-slide');
    dots[currentSlide].classList.remove('active-dot');
    currentSlide = index;
    slides[currentSlide].classList.add('active-slide');
    dots[currentSlide].classList.add('active-dot');
  });
});


// var startX = 0;
// var endX = 0;

// slides[0].addEventListener('touchstart', function(e) {
//   startX = e.touches[0].pageX;
// });
// slides[0].addEventListener('touchend', function(e) {
//   endX = e.changedTouches[0].pageX;
//   if (startX > endX + 50) {
//     nextSlide();
//   } else if (startX < endX - 50) {
//     slides[currentSlide].classList.remove('active-slide');
//     dots[currentSlide].classList.remove('active-dot');
//     currentSlide = (currentSlide + slides.length - 1) % slides.length;
//     slides[currentSlide].classList.add('active-slide');
//     dots[currentSlide].classList.add('active-dot');
//   }
// });

slides[currentSlide].classList.add('active-slide');
dots[currentSlide].classList.add('active-dot');

// console.log("slides",slides)