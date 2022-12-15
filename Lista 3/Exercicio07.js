function calculo() {
    let valor1 = parseFloat(document.getElementById("valor1").value);
    let valor2 = parseFloat(document.getElementById("valor2").value);
    let valor3 = parseFloat(document.getElementById("valor3").value);

    let somaValores = valor1+valor2+valor3;
    let valorFinal = somaValores**2;

    resultado.value = valorFinal;
}