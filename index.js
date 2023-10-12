const navbar = document.getElementById("navbar");
let icon = document.getElementById("menu");

function overlay(){
    if(icon.classList.contains('fa-bars')){
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
        navbar.style.left = '0';
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
        navbar.style.left = '-100%';
    }
}