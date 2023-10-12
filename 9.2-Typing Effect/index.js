const text = document.querySelector(".s-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Javascript";
    },0)
    setTimeout(() => {
        text.textContent = "HTML/CSS"
    },4000)
    setTimeout(() => {
        text.textContent = "React JS"
    },8000)
}

textLoad();
setInterval(textLoad,12000)