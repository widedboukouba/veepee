let bigImg = document.querySelector(".big-img img");
function showImg(pic) {
  bigImg.src = pic;
}

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


