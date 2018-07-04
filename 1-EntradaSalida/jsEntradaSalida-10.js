/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarImporteConDescuento()
{
	var importe = parseInt(document.getElementById("importe").value);

    var importeConDescuento = importe - calcularDescuento(importe, 25);

    document.getElementById("resultado").value = importeConDescuento;
}

/*
retorna el resultado del porcentaje a aplicar en el importe
*/ 
function calcularDescuento(importe, porcentajeDescuento) 
{
    return (importe * porcentajeDescuento) / 100;
}
