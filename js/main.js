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
const scheduleDetails = document.querySelector(".schedule-details");

mountainOne.addEventListener("click", () => {
  mountainTwo.classList.remove("active-mtn-tab");
  mountainOne.classList.add("active-mtn-tab");
  scheduleDetails.innerHTML = `
    <div class="schedule-col-1">
      <span>8 Feb 2017</span><br>
      <span>22 Feb 2017</span><br>
      <span>17 Mar 2017</span><br>
      <span>7 Apr 2017</span>
    </div>
    <div class="schedule-col-2">
      <span>Vestibulum viverra</span><br>
      <span>Vestibulum viverra</span><br>
      <span>Vestibulum viverra</span><br>
      <span>Vestibulum viverra</span>
    </div>
  `;
  document.querySelector(".schedule-section").style.backgroundImage =
    "url('./img/climb-hero-img.jpg')";
  document.querySelector(".schedule-section").style.backgroundSize = "cover";
});

mountainTwo.addEventListener("click", () => {
  mountainOne.classList.remove("active-mtn-tab");
  mountainTwo.classList.add("active-mtn-tab");
  scheduleDetails.innerHTML = "";
  scheduleDetails.innerHTML = `
  <div class="schedule-col-1">
            <span>25 Nov 2016</span><br>
            <span>28 Nov 2016</span><br>
            <span>18 Dec 2016</span><br>
            <span>7 Jan 2017</span>
  </div>
  <div class="schedule-col-2">
            <span>Vestibulum viverra</span><br>
            <span>Vestibulum viverra</span><br>
            <span>Vestibulum viverra</span><br>
            <span>Vestibulum viverra</span>
  </div>
  `;
  document.querySelector(".schedule-section").style.backgroundImage =
    "url('./img/mountain3.jpg')";
  document.querySelector(".schedule-section").style.backgroundSize = "cover";
});
