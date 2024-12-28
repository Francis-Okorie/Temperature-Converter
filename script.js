const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const kelvinInput = document.getElementById("kelvin");


const inputs = document.querySelectorAll(".input");

for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i];

    input.addEventListener("input", (e)=>{
        let currentName = e.target.name;
        let currentValue = parseFloat(e.target.value);


        switch (currentName) {
            case "celsius":
                fahrenheitInput.value = ((currentValue * 1.8) + 32).toFixed(2);
                kelvinInput.value = (currentValue + 273.15).toFixed(2);
                break;

            case "fahrenheit":
                let fValue = ((currentValue - 32) / 1.8);
                celsiusInput.value = (fValue).toFixed(2);
                kelvinInput.value = (((currentValue - 32) / 1.8) + 273.15).toFixed(2);
                break;
            case "kelvin":
                celsiusInput.value = (currentValue - 273.15).toFixed(2);
                fahrenheitInput.value = (((currentValue - 273.15) * 1.8) + 32).toFixed(2);
            break;            
        }
        
        
    });
    
    

    
}

/*
let convertInput = document.querySelector(".convert-btn");
    convertInput.addEventListener("click", ()=> {
        alert("click")
        console.log(celsiusInput.value)

    });
*/

