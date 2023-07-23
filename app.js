// Zmiana koloru nazwy modelu
const carModels = document.querySelectorAll(".cars-models button")
const underline = document.querySelector("span.underline")

const headerPicture = document.querySelector("header picture img")
const firstSection = document.querySelector("#first")

let lastActive = carModels[0]
carModels.forEach((e) => {

    e.addEventListener("click", () => {
        e.classList.add("active");
        if (lastActive != e) {
            lastActive.classList.remove("active")
        }
        lastActive = e;
        
        if (carModels[0].classList.contains("active")) {
            underline.style.translate = "0px 5px"
        } else if(carModels[1].classList.contains("active")) {
            underline.style.translate = "250px 5px"
        } else {
            underline.style.translate = "475px 5px"
        }
    })
})

carModels[0].addEventListener("click", () => {
    firstSection.classList.add("gemera-slide")
    firstSection.classList.remove("jesko-slide", "j-absolut-slide")
})

carModels[1].addEventListener("click", () => {
    firstSection.classList.add("jesko-slide")
    firstSection.classList.remove("gemera-slide", "j-absolut-slide")
})

carModels[2].addEventListener("click", () => {
    firstSection.classList.add("j-absolut-slide")
    firstSection.classList.remove("gemera-slide", "jesko-slide")
})

document.addEventListener("DOMContentLoaded", () => {
    headerPicture.style.scale = "0.73";
  });

const navbar = document.querySelector("nav.main-nav")

let lastScrollTop = 500;
window.addEventListener("scroll", () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop >  lastScrollTop) {
        navbar.style.top = "-1000px"
    } else {
        navbar.style.top = "0"
        navbar.style.background = "#687c7b"
        navbar.style.maxHeight = '150px'
    }
    lastScrollTop = scrollTop;
})