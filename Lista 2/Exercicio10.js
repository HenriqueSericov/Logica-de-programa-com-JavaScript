function calcu() {
    let item1 = parseFloat(document.getElementById("item1").value);
    let item2 = parseFloat(document.getElementById("item2").value);

    let auxiliar 

    auxiliar = item1;
    item1 = item2;
    item2 = auxiliar;

    resposta1.value = item1;
    resposta2.value = item2;
}