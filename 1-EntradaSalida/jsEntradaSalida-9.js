/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var importeSueldo = parseInt(document.getElementById("sueldo").value);
    var aumento = (importeSueldo * 10) / 100;
    var importeConAumento = importeSueldo + aumento;

    document.getElementById("resultado").value = importeConAumento;
	
}
