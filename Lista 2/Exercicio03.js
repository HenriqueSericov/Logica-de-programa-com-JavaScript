function calcu() {
    let salario = parseFloat(document.getElementById("salario").value);
    let reajuste = parseFloat(document.getElementById("reajuste").value);

    let reajustePorcentagem = reajuste/100*salario;
    let novoSalario = salario+reajustePorcentagem;

    resultado.value = novoSalario;
}