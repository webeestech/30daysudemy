const container = document.querySelector(".container");
icon = container.querySelector("i");

function onDrag({movementX,movementY}){
    let getStyle = window.getComputedStyle(container);
    let left = parseInt(getStyle.left);
    let top = parseInt(getStyle.top);
    container.style.left = `${left + movementX}px`
    container.style.top = `${top + movementY}px`
}


icon.addEventListener("mousedown",() => {
    icon.addEventListener("mousemove",onDrag)
})

document.addEventListener("mouseup",() => {
    icon.removeEventListener("mousemove",onDrag)
})