
//Generating the DOM
document.addEventListener("DOMContentLoaded", function(){

    //Getting the needed document inputs
    const lengthForm = document.getElementById("lengthForm");
    const lengthInput = document.getElementById("lengthInput");
    const fromUnit = document.getElementById("fromUnit");
    const toUnit = document.getElementById("toUnit");
    const resultDisplay = document.getElementById("result");

    //Event Listener for form
    lengthForm.addEventListener("submit", function(event){

        //Prevents the default submit behaviour
        event.preventDefault();

        //Getting the values of the form
        const value = parseFloat(lengthInput.value);
        const from = fromUnit.value;
        const to = toUnit.value;
        
        const result = convertLength(value, from, to);

        resultDisplay.textContent = `${value} ${from} = ${result.toFixed(2)} ${to}`;
        
    });

    //Function to convert the length
    function convertLength(value, from, to){
        const toMeter = {
            'millimeter' : 0.001,
            'centimeter' : 0.01,
            'meter' : 1,
            'kilometer' : 1000,
            'inch' : 0.0254,
            'foot' : 0.3048,
            'yard' : 0.9144,
        };
        //Convert to meters
        const meters = value * toMeter[from];
        
        //Convert to the desired unit
        return meters / toMeter[to];
    }
});