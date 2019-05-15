// Your code goes here

const header = document.querySelector("header");
const container = document.querySelector(".home");
const footer = document.querySelector(".footer");

// mouseover header

header.addEventListener("mouseover", () => {
  header.classList.add("shadow");
  container.classList.add("opacity");
});

header.addEventListener("mouseout", () => {
  header.classList.remove("shadow");
  container.classList.remove("opacity");
});

// keydown (l)

document.addEventListener("keydown", event => {
  const loginKey = 76;
  if (event.which === loginKey) {
    header.insertAdjacentHTML("beforebegin", "<div class='login-screen'>Foo</div>");
  }
});

// wheel

let wheelTurns = 0;

window.addEventListener("wheel", () => {
  wheelTurns++;
  counter.textContent = `Wheel moved ${wheelTurns} times.`
});

const counter = document.createElement("span");
counter.className = "counter";
footer.appendChild(counter);

// drag / drop
// load
// focus
// resize
// scroll
// select
// dblclick
