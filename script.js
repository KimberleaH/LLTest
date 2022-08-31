// Hamburger Menu

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".clicklink").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))




// Slider

const slider = document.querySelectorAll(".slide");
const leftArrow = document.querySelectorAll(".left");
const rightArrow = document.querySelectorAll(".right");

slider.forEach((item, i) => {

    leftArrow[i].addEventListener("click", () => {
        item.scrollBy(-200, 0);
    })

    rightArrow[i].addEventListener("click", () => {
        item.scrollBy(200, 0);
    })
})