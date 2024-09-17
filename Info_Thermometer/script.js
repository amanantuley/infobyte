document.getElementById('convertButton').addEventListener('click', function() {
    const tempInput = parseFloat(document.getElementById('tempInput').value);
    const unit = document.getElementById('unitSelector').value;
    let convertedTemp;
    let resultUnit;

    if (isNaN(tempInput)) {
        alert("Please enter a valid number.");
        return;
    }

    switch (unit) {
        case 'C':
            convertedTemp = {
                F: (tempInput * 9/5) + 32,
                K: tempInput + 273.15
            };
            resultUnit = 'Celsius';
            break;
        case 'F':
            convertedTemp = {
                C: (tempInput - 32) * 5/9,
                K: (tempInput - 32) * 5/9 + 273.15
            };
            resultUnit = 'Fahrenheit';
            break;
        case 'K':
            convertedTemp = {
                C: tempInput - 273.15,
                F: (tempInput - 273.15) * 9/5 + 32
            };
            resultUnit = 'Kelvin';
            break;
    }

    document.getElementById('convertedTemp').innerHTML = `
        Celsius: ${convertedTemp.C ? convertedTemp.C.toFixed(2) + ' °C' : 'N/A'}<br>
        Fahrenheit: ${convertedTemp.F ? convertedTemp.F.toFixed(2) + ' °F' : 'N/A'}<br>
        Kelvin: ${convertedTemp.K ? convertedTemp.K.toFixed(2) + ' K' : 'N/A'}
    `;
});
