const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// // Show active menu when scrolling
// const highlightMenu = () => {
//   const elem = document.querySelector('.highlight');
//   const homeMenu = document.querySelector('#home-page');
//   const aboutMenu = document.querySelector('#about-page');
//   const servicesMenu = document.querySelector('#services-page');
//   let scrollPos = window.scrollY;
//   // console.log(scrollPos);

//   // adds 'highlight' class to my menu items
//   if (window.innerWidth > 960 && scrollPos < 600) {
//     homeMenu.classList.add('highlight');
//     aboutMenu.classList.remove('highlight');
//     return;
//   } else if (window.innerWidth > 960 && scrollPos < 1400) {
//     aboutMenu.classList.add('highlight');
//     homeMenu.classList.remove('highlight');
//     servicesMenu.classList.remove('highlight');
//     return;
//   } else if (window.innerWidth > 960 && scrollPos < 2345) {
//     servicesMenu.classList.add('highlight');
//     aboutMenu.classList.remove('highlight');
//     return;
//   }

//   if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
//     elem.classList.remove('highlight');
//   }
// };

// // window.addEventListener('scroll', highlightMenu);
// // window.addEventListener('click', highlightMenu);

// //  Close mobile Menu when clicking on a menu item
// const hideMobileMenu = () => {
//   const menuBars = document.querySelector('.is-active');
//   if (window.innerWidth <= 768 && menuBars) {
//     menu.classList.toggle('is-active');
//     menuLinks.classList.remove('active');
//   }
// };

// menuLinks.addEventListener('click', hideMobileMenu);
// navLogo.addEventListener('click', hideMobileMenu);

// ///silede image

// const slides = document.querySelectorAll(".slides img");
// let slideIndex = 0;
// let intervalId = null;

// document.addEventListener("DOMContentLoaded", initializeSlider);

// function initializeSlider(){
//     if(slides.length > 0){
//         slides[slideIndex].classList.add("displaySlide");
//         intervalId = setInterval(nextSlide, 5000);
//     }
// }

// function showSlide(index){
//     if(index >= slides.length){
//         slideIndex = 0;
//     }
//     else if(index < 0){
//         slideIndex = slides.length - 1;
//     }

//     slides.forEach(slide => {
//         slide.classList.remove("displaySlide");
//     });
//     slides[slideIndex].classList.add("displaySlide");
// }

// function prevSlide(){
//     clearInterval(intervalId);
//     slideIndex--;
//     showSlide(slideIndex);
// }

// function nextSlide(){
//     slideIndex++;
//     showSlide(slideIndex);
// }

///JS bawaan sampai sini///