const container = document.querySelector(".container");
const overlay = document.querySelector(".overlay");
const popupBtn = document.querySelector(".popup-btn");
const closeBtn = document.querySelector(".close-btn");

popupBtn.addEventListener("click",() => {
    container.classList.add("active");
})

overlay.addEventListener("click",() => {
    container.classList.remove("active");
})

closeBtn.addEventListener("click",() => {
    container.classList.remove("active");
})