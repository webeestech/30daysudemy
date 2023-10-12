const button = document.getElementById("calculate-btn");
const result = document.getElementById("result");

button.addEventListener("click", () => {
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById("weight").value);
    let height_status = false, weight_status = false;

    if(height === '' || isNaN(height) || (height <= 0)){
        document.getElementById('height-error').innerHTML = 'Please provide a valid height'
    } else {
        document.getElementById('height-error').innerHTML = '';
        height_status= true;
    }

    if(weight === '' || isNaN(weight) || (weight <= 0)){
        document.getElementById("weight-error").innerHTML = "Please provide a valid weight";
    } else {
        document.getElementById("weight-error").innerHTML = "";
        weight_status = true;
    }

    if(height_status && weight_status) {
        const bmi = (weight / ((height*height)/ 10000)).toFixed(4);

        if(bmi < 18.6){
            result.innerHTML = "Underweight: " + bmi; 
        } else if (bmi >= 18.6 && bmi < 24.9){
            result.innerHTML = "Normal: " + bmi;
        } else {
            result.innerHTML = "Overweight: " + bmi;
        }
    } else {
        alert('Please provide the right numbers');
        result.innerHTML = "";
    }
})