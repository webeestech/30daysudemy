let button = document.getElementById("convert");

button.addEventListener("click", function(){
    const gram = parseInt(document.getElementById('gram').value);
    const type =document.getElementById('type').value;


    if(gram === '' || isNaN(gram)){
        document.getElementById('gram').focus();
        document.getElementById('error').innerHTML = 'Please provide a value';
        document.getElementById('output').innerHTML = ''
    } else {
        document.getElementById('error').innerHTML = '';
        switch(type){
            case 'pounds':
                convert_pounds(gram);
                break;
            case 'kilograms':
                convert_kilograms(gram);
                break;
            case 'ounces':
                convert_ounces(gram);
                break;
            default:
                alert('Something went wrong!')
        }

        function convert_pounds(gram){
            let rate = 0.0022, pounds;
            pounds = gram * rate;
            document.getElementById('output').innerHTML = gram + 'grams='  + pounds.toFixed(3) + 'pounds';
        }

        function convert_kilograms(gram){
            let rate = 0.001, kilograms;
            kilograms = gram * rate;
            document.getElementById('output').innerHTML = gram + 'grams=' + kilograms.toFixed(3) + 'kgs';
        }

        function convert_ounces(gram){
            let rate = 0.035274, ounces;
            ounces = gram * rate;
            document.getElementById('output').innerHTML = gram + 'grams=' + ounces.toFixed(3) + 'ounces';
        }
    }
})