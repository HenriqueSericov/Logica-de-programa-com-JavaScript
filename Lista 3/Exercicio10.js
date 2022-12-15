function calculo() {
    let nEleitores = parseFloat(document.getElementById("nEleitores").value);
    let vBranco = parseFloat(document.getElementById("vBranco").value);
    let vNulo = parseFloat(document.getElementById("vNulo").value);
    let vVa = parseFloat(document.getElementById("vVa").value);
    let vVb = parseFloat(document.getElementById("vVb").value);
    let vVc = parseFloat(document.getElementById("vVc").value);

    let vValidos = vVa+vVb+vVc;
    let pValidos = vValidos/nEleitores*100;
    let pVa = vVa/vValidos*100;
    let pVb = vVb/vValidos*100;
    let pVc = vVc/vValidos*100;

    resultadoA.value = (pVa + "%");
    resultadoB.value = (pVb + "%");
    resultadoC.value = (pVc + "%");
}