//Generating the DOM
document.addEventListener("DOMContentLoaded", function(){
    //Getting the inputs
    const temperatureForm = document.getElementById("temperatureForm");
    const temperatureInput = document.getElementById("temperatureInput");
    const fromUnit = document.getElementById("fromUnit");
    const toUnit = document.getElementById("toUnit");
    const resultDisplay = document.getElementById("result");

    temperatureForm.addEventListener("submit", function(event){

        event.preventDefault();

        const value = parseFloat(temperatureInput.value);
        const from = fromUnit.value;
        const to = toUnit.value;

        const result = convertTemperature(value, from, to);

        resultDisplay.innerText = `${value} ${from} = ${result.toFixed(2)} ${to}`;
    });

    function convertTemperature(value, from, to){
        let celsius;

        if(from === 'celsius'){
            celsius = value;
        } else if(from === 'fahrenheit'){
            celsius = (value - 32) * 5/9;
        } else if(from === 'kelvin'){
            celsius = value - 273.15;
        }

        if (to === 'celsius') {
            return celsius;
        } else if (to === 'fahrenheit') {
            return (celsius * 9/5) + 32;
        } else if (to === 'kelvin') {
            return celsius + 273.15;
        }
    }
});