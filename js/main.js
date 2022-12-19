//Buttoms for making carousel images scroll forward/backwards

const slides = [...document.querySelectorAll(".img-container")];
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];

slides.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
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

//To make schedule change when toggling between Mountain Tabs

const activeMode = document.querySelector(".active-mtn-tab");
const mountainOne = document.querySelector(".mountainOne");
const mountainTwo = document.querySelector(".mountainTwo");

mountainOne.addEventListener("click", () => {
  mountainTwo.classList.remove("active-mtn-tab");
  mountainOne.classList.add("active-mtn-tab");
});

mountainTwo.addEventListener("click", () => {
  mountainOne.classList.remove("active-mtn-tab");
  mountainTwo.classList.add("active-mtn-tab");
});
