function calculo() {
    let valor1 = parseFloat(document.getElementById("valor1").value);
    let valor2 = parseFloat(document.getElementById("valor2").value);
    let valor3 = parseFloat(document.getElementById("valor3").value);
    let valor4 = parseFloat(document.getElementById("valor4").value);

    let somaValor = valor1+valor2+valor3+valor4;
    let produtoValor = valor1*valor2*valor3*valor4;

    resultado1.value = somaValor;
    resultado2.value = produtoValor;
}