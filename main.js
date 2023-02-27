const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

let currentIndex = 0;

function showSlide(index) {
  slides[currentIndex].classList.remove('active');
  slides[index].classList.add('active');
  currentIndex = index;
}

function moveToNextSlide() {
  let newIndex = currentIndex + 1;
  if (newIndex >= slides.length) {
    newIndex = 0;
  }
  showSlide(newIndex);
}

function moveToPrevSlide() {
  let newIndex = currentIndex - 1;
  if (newIndex < 0) {
    newIndex = slides.length - 1;
  }
  showSlide(newIndex);
}

nextButton.addEventListener('click', moveToNextSlide);
prevButton.addEventListener('click', moveToPrevSlide);

showSlide(currentIndex);