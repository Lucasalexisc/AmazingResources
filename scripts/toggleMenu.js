let menuSign = document.querySelector('.menu-sign');
let navbar = document.querySelector('.navbar');
// let bod = document.querySelector('.container');

menuSign.addEventListener('click', function() {
  menuSign.classList.toggle('isactive');
  navbar.classList.toggle('active');
});
