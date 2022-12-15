function calcu() {
    let celsius = parseFloat(document.getElementById("celsius").value);

    let fahrenheit = (celsius*9+160)/5;

    resultado.value = fahrenheit;
}