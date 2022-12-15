function calculo() {
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);

    let difValor = numero1-numero2;
    let potencia = difValor**2;

    resultado.value = potencia;


}