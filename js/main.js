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
const scheduleSection = document.querySelector(".schedule-section");
const mountainOne = document.getElementById("mountainOne");
const mountainTwo = document.getElementById("mountainTwo");
const scheduleDetails = document.querySelector(".schedule-details");
const colOneSchedule = document.querySelector(".schedule-col-1");

mountainOne.addEventListener("click", () => {
  mountainTwo.classList.remove("active-mtn-tabs");
  mountainOne.classList.add("active-mtn-tabs");
  colOneSchedule.innerHTML = `
    <span>8 Feb 2017</span><br>
    <span>22 Feb 2017</span><br>
    <span>17 Mar 2017</span><br>
    <span>7 Apr 2017</span>
    `;
  scheduleSection.style.backgroundImage = "url('./img/climb-hero-img.jpg')";
  scheduleSection.style.backgroundSize = "cover";
});

mountainTwo.addEventListener("click", () => {
  mountainOne.classList.remove("active-mtn-tabs");
  mountainTwo.classList.add("active-mtn-tabs");
  colOneSchedule.innerHTML = "";
  colOneSchedule.innerHTML = `
    <span>25 Nov 2016</span><br>
    <span>28 Nov 2016</span><br>
    <span>18 Dec 2016</span><br>
    <span>7 Jan 2017</span>
  `;
  scheduleSection.style.backgroundImage = "url('./img/mountain3.jpg')";
  scheduleSection.style.backgroundSize = "cover";
});

// For accordion mobile styles

const acc = document.querySelector(".accordion");
let i;

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", () => {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
