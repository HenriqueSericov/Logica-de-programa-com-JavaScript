function calculo() {
    let dolar = parseFloat(document.getElementById("dolar").value);
    let qtdReais = parseFloat(document.getElementById("qtdReais").value);

    let vDolar = qtdReais/dolar;

    resultado.value = vDolar;
}