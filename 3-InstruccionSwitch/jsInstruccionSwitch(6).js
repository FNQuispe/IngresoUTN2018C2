function mostrar()
{
//tomo la edad  
var laHora = document.getElementById('hora').value;

    switch (laHora) {
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
            alert("Es de mañana.");
            break;
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
            alert("Es de tarde.");
            break;
        case 20:
        case 21:
        case 22:
        case 23:
        case 24:
            alert("Es de noche.");
            break;
        
        default:
            alert("El horario no existe");
            break;
    }
	



}//FIN DE LA FUNCIÓN

/*function horarioMatutino(hora) {
    var horaParseada = parseInt(hora);
    if (horaParseada >= 7 && horaParseada <= 11) {
        return hora;
    }
}

function horarioVespertino(hora) {
    var horaParseada = parseInt(hora);
    if (horaParseada >= 12 && horaParseada <= 19) {
        return hora;
    }
}

function horarioNocturno(hora) {
    var horaParseada = parseInt(hora);
    if (horaParseada >= 20 && horaParseada <= 24) {
        return hora;
    }
}*/
//FIN DE LA FUNCIÓN