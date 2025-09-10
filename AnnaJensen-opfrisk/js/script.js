/* BURGER MENU */

const hamburger = document.querySelector(".burger-btn");
const navUL = document.querySelector(".nav-list");
const bars = document.querySelectorAll(".bar");

hamburger.addEventListener("click", () => {
  navUL.classList.toggle("show");

  bars.forEach((element) => {
    element.classList.toggle("active");
  });
});

navUL.addEventListener("click", () => {
  navUL.classList.remove("show");

  bars.forEach((element) => {
    element.classList.remove("active");
  });
});

/* SLIDER */

const imageInSlider = document.querySelector(".image-in-slider");

let currentImageIndex = 0;

let images = [
  "assets/img/slider/hero_img.jpg",
  "assets/img/slider/hero_img2.jpg",
  "assets/img/slider/hero_img3.jpg",
];

function setActiveSlide() {
  imageInSlider.src = images[currentImageIndex];
}

setActiveSlide();

function next() {
  if (currentImageIndex < images.length - 1) {
    currentImageIndex += 1;

  } else {
    currentImageIndex = 0;
  }

  setActiveSlide();
}

setInterval(next, 3000);

/* SUCCESBESKED  */

const form = document.getElementById("myForm");

form.onsubmit = function() {

alert("Beskeden blev afsendt!");
}

/* DIALOG */

const dialog = document.querySelector(".dialogBox");
const dialogImg = document.querySelector(".dialogImg")
const openBtn = document.querySelectorAll(".openBtn");
const closeBtn = document.querySelector(".closeBtn");

openBtn.forEach(img => {
  img.addEventListener("click", () => {
    dialogImg.src = img.src;
    dialog.showModal();
  });
})

closeBtn.addEventListener("click", () => {
  dialog.close();
});
