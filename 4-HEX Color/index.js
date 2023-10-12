const generateBtn = document.getElementById('generate-btn');
const body = document.querySelector('body');
const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const hexCode =document.getElementById('hex');
const copyBtn = document.getElementById('copy-btn');

body.style.backgroundColor = '#000000';
hexCode.innerHTML = '#000000';

generateBtn.addEventListener('click',function(){
    let hexKey = '#';
    for(let i=0; i<6; i++){
        const index = Math.floor(Math.random() * hex.length);
        hexKey = hexKey + hex[index];
    }

    hexCode.innerHTML = hexKey;
    document.getElementById('hex-code').value = hexKey;
    body.style.backgroundColor = hexKey;
    body.style.transition = '1s';
});

copyBtn.addEventListener('click',function(){
    let hex = document.getElementById('hex-code');

    hex.select();
    hex.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(hex.value);
    alert('Copied Hex Color:' + hex.value);

})

