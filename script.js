function convertFromCelsius() {
    let celsius = parseFloat(document.getElementById("celsius").value)
    if (isNaN(celsius)) {
        clearFields('fahrenheit', 'kelvin');
        return;
    }
    document.getElementById("fahrenheit").value = (celsius * 9 / 5 + 32).toFixed(2);
    document.getElementById("kelvin").value = (celsius + 273.15).toFixed(2);
}

function convertFromFahrenheit() {
    let fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
    if (isNaN(fahrenheit)) {
        clearFields("celsius", "kelvin");
        return;
    }
    document.getElementById("celsius").value = ((fahrenheit - 32) * 5 / 9).toFixed(2);
    document.getElementById("kelvin").value = ((fahrenheit - 32) * 5 / 9 + 273.15).toFixed(2);
}

function convertFromKelvin() {
    let kelvin = parseFloat(document.getElementById("kelvin").value);
    if (isNaN(kelvin)) {
        clearFields("celsius", "fahrenheit");
        return;
    }
    document.getElementById("celsius").value = (kelvin - 273.15).toFixed(2);
    document.getElementById("fahrenheit").value = ((kelvin - 273.15) * 9 / 5 + 32).toFixed(2);
}

function clearFields(field1, field2) {
    document.getElementById(field1).value = "";
    document.getElementById(field2).value = "";
}