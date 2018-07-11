function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);

switch (mesDelAño) {
    case esInvierno(mesDelAño):
        alert( "Abrigate que hace frio." );
        break;
    case sePasoElInvierno(mesDelAño):
        alert("Ya pasamos el frio, ahora calor!!!." );
        break;
    default:
        alert("Falta para el invierno.");
        break;
}

function esInvierno(mes) {
    if (mes === "Agosto" || mes === "Julio") {
        return mes;
    }
}

function sePasoElInvierno(mes) {
    if (mes === "Septiembre" || mes === "Octubre" || mes === "Noviembre" || mes === "Diciembre") {
        return mes;
    }
}



}//FIN DE LA FUNCIÓN