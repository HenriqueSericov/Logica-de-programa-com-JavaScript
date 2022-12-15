function calcu() {
    let custoFabrica = parseFloat(document.getElementById("custoFabrica").value);

    let taxaDistribuidor = custoFabrica*0.28;
    let taxaGoverno = custoFabrica*0.45;
    let custoFinal = custoFabrica+taxaDistribuidor+taxaGoverno;

    taxaDis.value = taxaDistribuidor;
    taxaGov.value = taxaGoverno;
    custoF.value = custoFinal;
}