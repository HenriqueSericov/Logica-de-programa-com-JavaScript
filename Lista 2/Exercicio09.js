function calcu() {
    let valorInicial = parseFloat(document.getElementById("valorInicial").value);
    let tempoT = parseFloat(document.getElementById("tempoT").value);
    let taxa = parseFloat(document.getElementById("taxa").value);

    let resultado = valorInicial+(valorInicial*taxa/100)*tempoT;

    valor.value = resultado
}