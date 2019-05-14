// Your code goes here

const header = document.querySelector("header");
const container = document.querySelector(".home");

// mouseover

header.addEventListener('mouseover', () => { 
    header.classList.add("shadow");
    container.classList.add("opacity");
});

header.addEventListener('mouseout', () => { 
    header.classList.remove("shadow");
    container.classList.remove("opacity");
});

// keydown


// wheel
// drag / drop
// load
// focus
// resize
// scroll
// select
// dblclick