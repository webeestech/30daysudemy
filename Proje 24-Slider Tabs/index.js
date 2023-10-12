const genres = document.querySelectorAll('a');
const rightArrow = document.querySelector(".right-arrow i");
const genreList = document.querySelector("ul");
const rightArrowContainer = document.querySelector(".right-arrow");
const leftArrowContainer = document.querySelector(".left-arrow");
const leftArrow = document.querySelector(".left-arrow i");



const removeActiveClass = () => {
    genres.forEach((genre) => {
        genre.classList.remove("active");
    })
}

genres.forEach((genre) => {
    genre.addEventListener("click",() => {
        removeActiveClass();
        genre.classList.add("active");
    })
})

const showIcons = () => {
    if(genreList.scrollLeft >= 20){
        leftArrowContainer.classList.add("active");
    } else {
        leftArrowContainer.classList.remove("active");
    }

    let maxScrollValue = genreList.scrollWidth - genreList.clientWidth - 20;
    console.log("scroll w:", genreList.scrollWidth);
    console.log("client w:", genreList.clientWidth);

    if(genreList.scrollLeft >= maxScrollValue) {
        rightArrowContainer.classList.remove("active");
    } else {
        rightArrowContainer.classList.add("active");
    }

}


rightArrow.addEventListener("click",() => {
    genreList.scrollLeft += 200;
    showIcons();
})

leftArrow.addEventListener("click",() => {
    genreList.scrollLeft -= 200;
    showIcons();
})

genreList.addEventListener("scroll",showIcons);

