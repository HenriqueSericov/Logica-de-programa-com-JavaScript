function calcu() {
    let altura = parseFloat(document.getElementById("altura").value);
    let raio = parseFloat(document.getElementById("raio").value);

    let volume = 3.14*(raio**2)*altura;

    resultado.value = volume;
}