function calculo() {
    let dolar = parseFloat(document.getElementById("dolar").value);
    let qtdDolar = parseFloat(document.getElementById("qtdDolar").value);

    let vReal = dolar*qtdDolar;

    resultado.value = vReal;
}