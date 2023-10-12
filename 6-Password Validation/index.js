let isVisible =false;

function see(){
    let input = document.getElementById("password");
    let see = document.getElementById("see");

    if(isVisible){
        input.type = 'password';
        isVisible = false;
        see.style.color = 'gray';
    } else {
        input.type = 'text';
        isVisible = true;
        see.style.color = '#262626'
    }
}

function check(){
    let input = document.getElementById("password").value;

    input = input.trim();
    document.getElementById("password").value = input;
    document.getElementById("count").innerText= "Length: " + input.length;

    if(input.length >= 5){
        document.getElementById("check-short").style.color = "green";
    } else {
        document.getElementById("check-short").style.color = "red";
    }
    if(input.length <= 10){
        document.getElementById("check-long").style.color = "green";
    } else {
        document.getElementById("check-long").style.color = "red";
    }
    if(input.match(/[0-9]/i)){
        document.getElementById("check-number").style.color = "green";
    } else {
        document.getElementById("check-number").style.color = "red";
    }
    if(input.match(/[^A-Za-z0-9-' ']/i)){
        document.getElementById("check-special").style.color = "green";
    } else {
        document.getElementById("check-special").style.color = "red";
    }
    if(input.match(' ')){
        document.getElementById("check-space").style.color = "green";
    } else {
        document.getElementById("check-space").style.color = "red";
    }
}