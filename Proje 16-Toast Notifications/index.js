let toastBox = document.getElementById('toastBox');
let successMessage = '<i class="fa-solid fa-circle-check"></i> Succesfully completed, thank you!';
let errorMessage = '<i class="fa-solid fa-circle-xmark"></i> OOOPS! Something went wrong!';
let warningMessage = '<i class="fa-solid fa-circle-exclamation"></i> Please check the fields again!';


function showToast(msg){
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if(msg.includes('wrong')){
        toast.classList.add('error');
    }

    if(msg.includes('again')){
        toast.classList.add('warning');
    }

    setTimeout(() => {
        toast.remove();
    },5000)
}