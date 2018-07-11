function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
function mesConTreintaDias(mes) {
    if (mes === "Abril" || mes === "Junio" || mes === "Septiembre" || mes === "Noviembre") {
        return mes;
    }
}

switch (mesDelAño) {
    case "Febrero":
        alert("Tiene 28 dias");
        break;
    case mesConTreintaDias(mesDelAño):
        alert("Tiene 30 dias");
        break
    default:
        alert("Tiene 31 dias");
        break;
}	



}//FIN DE LA FUNCIÓN