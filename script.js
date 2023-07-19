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

let coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

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
