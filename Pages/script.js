const toggleBtn = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const links = document.querySelectorAll(".nav-links");

toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("true");
  nav.setAttribute("style", "display:flex");

  links.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `listfade 1s ease-in ${index / 100}s`;
    }
  });
  toggleBtn.classList.toggle("toggle");
});

let link = document.getElementsByClassName("nav-link")[1];
let dropDown = document.querySelector(".drop-down");

const toggleDropdown = function () {
  dropDown.classList.toggle("show");
};

link.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleDropdown();
});

document.documentElement.addEventListener("click", function () {
  if (dropDown.classList.contains("show")) {
    toggleDropdown();
  }
});

/* function carousel() {
  const images = [
    'url("../Assets/background1.jpg")',
    'url("../Assets/background2.jpg")',
    'url("../Assets/background3.png")',
    'url("../Assets/background4.png")',
  ];

  const background = document.querySelector(".bg-carousel");
  const bg = images[Math.floor(Math.random()*images.length)];
  background.style.backgroundImage = bg;
};

setInterval(carousel, 2000)
 */