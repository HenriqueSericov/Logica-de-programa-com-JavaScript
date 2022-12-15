function calculo() {
    let comprimento = parseFloat(document.getElementById("comprimento").value);
    let largura = parseFloat(document.getElementById("largura").value);
    let altura = parseFloat(document.getElementById("altura").value);

    let result = comprimento*largura*altura;

    resultado.value = result;

}