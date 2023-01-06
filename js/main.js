/*Buttoms for making carousel images scroll forward/backwards. I found this code through a youtube tutorial- 
source code for carousel is https://github.com/devression/product-slider */

const slides = document.querySelectorAll(".img-container");
const nxtBtn = document.querySelector(".nxt-btn");
const preBtn = document.querySelector(".pre-btn");

slides.forEach((item) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn.addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  preBtn.addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});

//To make nav link text change color when scrolling
const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 700) {
    nav.classList.add("active-nav");
  } else {
    nav.classList.remove("active-nav");
  }
});

//To make schedule and image change when toggling between Mountain Tabs
const scheduleSection = document.querySelector(".schedule-section");
const mountainOne = document.querySelector(".mountainOne");
const mountainTwo = document.querySelector(".mountainTwo");
const scheduleDetails = document.querySelector(".schedule-details");
const colOneSchedule = document.querySelector(".schedule-col-1");

mountainOne.addEventListener("click", () => {
  mountainTwo.classList.remove("active-mtn-tabs");
  mountainOne.classList.add("active-mtn-tabs");
  colOneSchedule.innerHTML = `
  <span>25 Nov 2016</span><br>
  <span>28 Nov 2016</span><br>
  <span>18 Dec 2016</span><br>
  <span>7 Jan 2017</span>
    `;
  scheduleSection.style.backgroundImage = "url('./img/climb-hero-img.jpg')";
  scheduleSection.style.backgroundSize = "cover";
});

mountainTwo.addEventListener("click", () => {
  mountainOne.classList.remove("active-mtn-tabs");
  mountainTwo.classList.add("active-mtn-tabs");
  colOneSchedule.innerHTML = "";
  colOneSchedule.innerHTML = `
  <span>8 Feb 2017</span><br>
  <span>2 Feb 2017</span><br>
  <span>18 Mar 2017</span><br>
  <span>7 Apr 2017</span>
  `;
  scheduleSection.style.backgroundImage = "url('./img/mountain3.jpg')";
  scheduleSection.style.backgroundSize = "cover";
});

//To make tabs into accordion on mobile --

const acc1 = document.getElementById("acc1");
const acc2 = document.getElementById("acc2");
const panelOne = document.querySelector(".panelOne");
const panelTwo = document.querySelector(".panelTwo");

acc1.addEventListener("click", () => {
  acc1.classList.toggle("active");
  scheduleSection.style.backgroundImage = "url('./img/climb-hero-img.jpg')";
  scheduleSection.style.backgroundSize = "cover";
  if (panelOne.style.display === "none") {
    panelOne.style.display = "flex";
    panelTwo.style.display = "none";
  } else {
    panelOne.style.display = "none";
  }
});

acc2.addEventListener("click", () => {
  acc2.classList.toggle("active");
  scheduleSection.style.backgroundImage = "url('./img/mountain3.jpg')";
  scheduleSection.style.backgroundSize = "cover";
  if (panelTwo.style.display === "none") {
    panelTwo.style.display = "flex";
    panelOne.style.display = "none";
  } else {
    panelTwo.style.display = "none";
  }
});
