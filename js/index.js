// Your code goes here

// Event listeners

const nav = document.querySelector(".nav");
nav.addEventListener('click', () => nav.classList.add("rotate-center"));

// mouseover
const headerImg = document.querySelector(".intro img");
headerImg.addEventListener('mouseover', () => headerImg.classList.add("rotate-center"));

// keydown
// wheel
// drag / drop
// load
// focus
// resize
// scroll
// select

// dblclick
const header = document.querySelector("header");
header.addEventListener('dblclick', () => {
    let a = Math.floor(Math.random() * 100);
    let b = "red";
    header.style.backgroundColor = `#DD${a}${a}`;
});