function calcu() {
    let tempoG = parseFloat(document.getElementById("tempoG").value);
    let velocidade = parseFloat(document.getElementById("velocidade").value);

    let distancia = velocidade*tempoG
    
    let litros = distancia/12

    vMedia.value = (velocidade + "Km/h");
    tHoras.value = (tempoG + " h");
    distanciaPerc.value = (distancia + "Km");
    litrosUsados.value = (litros + " litros");
}