function mostrar()
{
//tomo la edad  
    var mesDelAño = document.getElementById('mes').value;

    //alert (mesDelAño);

    switch (mesDelAño) {
        case "Agosto":
        case "Julio":
            alert( "Abrigate que hace frio." );
            break;
        case "Septiembre":
        case "Octubre":
        case "Noviembre":
        case "Diciembre":
            alert("Ya pasamos el frio, ahora calor!!!." );
            break;
        default:
            alert("Falta para el invierno.");
            break;
    }

}//FIN DE LA FUNCIÓN
/*function esInvierno(mes) {
    if (mes === "Agosto" || mes === "Julio") {
        return mes;
    }
}

function sePasoElInvierno(mes) {
    if (mes === "Septiembre" || mes === "Octubre" || mes === "Noviembre" || mes === "Diciembre") {
        return mes;
    }
}*/
