const tabsBtn = document.querySelectorAll('.tab-btn');
const content = document.querySelectorAll('.content');
let line = document.querySelector('.line');

tabsBtn.forEach((tab, index) => {
    tab.addEventListener('click', e => {
        tabsBtn.forEach(tab => {
            tab.classList.remove('active');
        })
        tab.classList.add('active');
        line.style.width = e.target.offsetWidth + "px";
        line.style.left = e.target.offsetLeft + "px";


        content.forEach(cont => {
            cont.classList.remove('active');
        })
        content[index].classList.add('active');
    })
})