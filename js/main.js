//Buttoms for making carousel images scroll forward/backwards
const slides = document.querySelector(".carousel-item");

let slidePosition = 0;

const totalSlides = slides.length;

document.querySelector(".nxt-btn").addEventListener("click", function () {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
});

document.querySelector(".pre-btn").addEventListener("click", function () {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }
});

//To make nav link text change color when scrolling
const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 780) {
    nav.classList.add("active-nav");
  } else {
    nav.classList.remove("active-nav");
  }
});
