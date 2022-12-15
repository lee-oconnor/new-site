// const carouselImages = document.querySelector(".img-div");

// let slidePosition = 0;

// const totalImgs = carouselImages.length;

// const slideDotOne = document.querySelector(".btn1");
// const slideDotTwo = document.querySelector(".btn1");
// const slideDotThree = document.querySelector(".btn1");

//To make nav link text change color when scrolling
const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 780) {
    nav.classList.add("active-nav");
  } else {
    nav.classList.remove("active-nav");
  }
});
