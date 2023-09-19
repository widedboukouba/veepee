//tooltip annimation navbar white
//toottip annimation

const hamburger = document.querySelector(".hamburger");
const tooltiptext = document.querySelector(".tooltiptext");
const navbar = document.querySelector(".tooltip");

hamburger.addEventListener("mouseenter", () => {
  navbar.classList.add("opened");
});

hamburger.addEventListener("mouseleave", () => {
  navbar.classList.remove("opened");
});

tooltiptext.addEventListener("mouseenter", () => {
  navbar.classList.add("opened");
});

tooltiptext.addEventListener("mouseleave", () => {
  navbar.classList.remove("opened");
});
