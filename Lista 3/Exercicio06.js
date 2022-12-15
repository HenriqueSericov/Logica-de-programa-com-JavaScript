function calculo() {
    let valor1 = parseFloat(document.getElementById("valor1").value);
    let valor2 = parseFloat(document.getElementById("valor2").value);
    let valor3 = parseFloat(document.getElementById("valor3").value);

    let elevadoValor1 = valor1**2;
    let elevadoValor2 = valor2**2;
    let elevadoValor3 = valor3**2;

    let valorFinal = elevadoValor1+elevadoValor2+elevadoValor3;

    resultado.value = valorFinal;
}