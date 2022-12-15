function calcu() {
    const dia = new Date();
    const mes = new Date();
    const ano = new Date();

    let MesNascimento = parseInt(document.getElementById("MesNas").value);
    let DiaNascimento = parseInt(document.getElementById("DiaNas").value);
    let AnoNascimento = parseInt(document.getElementById("AnoNas").value);

    let DifMes = mes.getMonth() - MesNascimento;
    let DifDia = dia.getDate() - DiaNascimento;
    let DifAno = ano.getFullYear() - AnoNascimento;

    if (DifMes <= 0) {
        DifMes = DifMes * (-1);
    }
    if (DifDia <= 0) {
        DifDia = DifDia * (-1);
    }

    let IdadeDias = (DifAno * 360) + (DifMes * 30) + DifDia;

    resultado.value = IdadeDias;
}