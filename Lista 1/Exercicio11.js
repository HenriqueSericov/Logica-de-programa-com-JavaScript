function result() {
    var h = parseFloat(document.getElementById("numero1").value);
    var b = parseFloat(document.getElementById("numero2").value);
    var B = parseFloat(document.getElementById("numero3").value);
    resultado.value = (B+b)*h/2;
}