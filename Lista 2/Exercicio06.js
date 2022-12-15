function calcu() {
    let fahrenheit = parseFloat(document.getElementById("fahrenheit").value);

    let celsius = (fahrenheit-32)*(5/9);

    resultado.value = celsius;
}