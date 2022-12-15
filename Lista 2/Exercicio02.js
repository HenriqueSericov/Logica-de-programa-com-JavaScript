function calcu() {
    let quantEleitores = parseFloat(document.getElementById("qtdEleitores").value);
    let quantVotosBrancos = parseFloat(document.getElementById("qtdVotosBrancos").value);
    let quantVotosNulos = parseFloat(document.getElementById("qtdVotosNulos").value);
    let quantVotosValidos = parseFloat(document.getElementById("qtdVotosValidos").value);

    let pVb = quantVotosBrancos/quantEleitores * 100;
    let pVn = quantVotosNulos/quantEleitores * 100;
    let pVv = quantVotosValidos/quantEleitores * 100;

    vb.value = (pVb + "%");
    vn.value = (pVn + "%");
    vv.value = (pVv + "%");
}