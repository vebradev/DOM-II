// Your code goes here

// Event listeners

const nav = document.querySelector(".nav");
nav.addEventListener("click", (event) => {
    nav.classList.add("rotate-center");
    event.preventDefault();
});

// mouseover
const img = document.querySelectorAll("img");

function addClass(element) {
  element.target.classList.add("rotate-center");
}

img.forEach(item => {
  item.addEventListener("mouseover", addClass);
});

// wheel
const body = document.querySelector("body");
body.addEventListener("wheel", () => {
  let a = Math.floor(Math.random() * 100);
  let b = Math.floor(Math.random() * 100);
  let c = Math.floor(Math.random() * 100);
  body.style.color = `#${a}${b}${c}`;
});

// drag / drop needs to happen
const dragImg = document.querySelector("section img");
dragImg.addEventListener("dragstart", () => {
  dragImg.style.opacity = 0.5;
  dragImg.style.border = "2px dashed blue";
});

// load
window.addEventListener('load', () => {
    alert('Page was fully loaded.');
});

// resize
window.addEventListener("resize", () => console.log("Window was resized."));

// scroll
const scrollLocation = document.querySelector(".intro p");

const scrollCount = document.createElement("div");
scrollCount.id = "scroll-counter";
scrollCount.textContent = "Scrolled this much: ";
scrollLocation.appendChild(scrollCount);

const scrollDistance = document.querySelector("#scroll-counter");
const scrollNumbers = document.createElement("span");
scrollNumbers.textContent = "0px";
scrollDistance.appendChild(scrollNumbers);

window.addEventListener("scroll", function() {
  document.querySelector("#scroll-counter span").innerHTML = pageYOffset + "px";
});

// dblclick
const header = document.querySelector("header");
header.addEventListener("dblclick", () => {
  let a = Math.floor(Math.random() * 100);
  header.style.backgroundColor = `#DD${a}${a}`;
});

// keydown
window.addEventListener("keydown", () => {
    console.log(`Key presses during visit.`);
  });