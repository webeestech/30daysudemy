let eyeicon = document.getElementById("showicon");
let password = document.getElementById("password");

eyeicon.onclick = function(){
    if(password.type === "password"){
        password.type = "text";
        eyeicon.classList.replace("fa-eye-slash","fa-eye");
    } else {
        password.type = "password";
        eyeicon.classList.replace("fa-eye","fa-eye-slash");
    }
}