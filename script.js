var fahr = document.convert.ftemp, cels = document.convert.ctemp, kelv = document.convert.ktemp;

for (let X = 0; X < inputs.length; X++) {}
    let input = inputs[X];

    input.addEventListener("input", function (e) {
        let value = parseFloat(e.target.value);
        
        switch (e.target.name) {
            case "celsius":
                FahrenheitInput.value = (value * 1.8) + 32;
                KelvinInput.value = value + 273.15;
                break;

            case "kelvin":
                CelsiusInput.value = value - 273.15;
                FahrenheitInput.value = ((value - 273.15) * 1.8) + 32;
                break;

            case "fahrenheit":
                CelsiusInput.value = (value - 32) / 1.8;
                KelvinInput.value = ((value - 32) / 1.8) + 273.15;
                break;
           
        }
        
    });
