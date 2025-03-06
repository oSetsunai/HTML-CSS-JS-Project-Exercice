//Generating the DOM
document.addEventListener("DOMContentLoaded", function(){
    //Getting the inputs
    const weightForm = document.getElementById("weightForm");
    const weightInput = document.getElementById("weightInput");
    const fromUnit = document.getElementById("fromUnit");
    const toUnit = document.getElementById("toUnit");
    const resultDisplay = document.getElementById("result");

    weightForm.addEventListener("submit", function(event){

        event.preventDefault();

        const value = parseFloat(weightInput.value);
        const from = fromUnit.value;
        const to = toUnit.value;

        const result = convertWeight(value, from, to);

        resultDisplay.innerText = `${value} ${from} = ${result.toFixed(2)} ${to}`;
    });

    function convertWeight(value, from, to){
        
        const toGram = {
            'miligram' : 0.001,
            'gram': 1,
            'kilogram': 1000,
            'ounce': 28.3495,
            'pound': 453.592000004704,
        };

        const grams = value * toGram[from];
        return grams / toGram[to];
    }
});