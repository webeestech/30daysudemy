let scrollProgress = document.getElementById("progress");
let progressValue = document.getElementById('progress-rate');

let calcScrollValue = () => {
    let pos = document.documentElement.scrollTop;
    console.log(pos);
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    console.log(calcHeight);
    let scrollValue = Math.round((pos * 100 ) / calcHeight);

    if(pos > 100){
        scrollProgress.style.display = "grid";
    } else {
        scrollProgress.style.display = "none";
    }

    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    })

    scrollProgress.style.background = `conic-gradient(#8A2BE2 ${scrollValue}%, #f0f0f0 ${scrollValue}%)`
}

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

