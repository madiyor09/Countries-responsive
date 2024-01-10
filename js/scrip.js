var elButton = document.querySelector(".header-btn");
var elHeader = document.querySelector(".site-header");
var elHero = document.querySelector(".hero");

var elInput = document.querySelector(".hero-input");
var elSelect = document.querySelector(".hero-select");
var elBox = document.querySelectorAll(".hero-bottom-box");

elButton.addEventListener("click",function() {
    elHeader.classList.toggle("header-dark");
    elHero.classList.toggle("hero-dark");
    elInput.classList.toggle("input-dark");
    elSelect.classList.toggle("select-dark");

    elBox.forEach(box => {
        box.classList.toggle("hero-box-dark")
    })

})