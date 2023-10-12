const menu = document.querySelector(".menu");
const selectBtn = document.querySelector(".menu-btn");
const options = document.querySelectorAll(".option");
const defText = document.querySelector(".def-text");

selectBtn.addEventListener("click",() => menu.classList.toggle("active"));

options.forEach(option => {
    option.addEventListener("click",() => {
        let selectedOption = option.querySelector(".option-text").innerText;
        defText.innerText = selectedOption;
        menu.classList.remove("active");
    })
})