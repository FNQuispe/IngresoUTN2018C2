function mostrar()
{
//tomo la edad  

	var edad = parseInt(document.getElementById("edad").value);
    var estadoCivil = document.getElementById("estadoCivil").value;

    if (edad < 18 && estadoCivil != "Soltero" ) {
        alert("Usted es muy joven para no estar Soltero ");
    } 

}//FIN DE LA FUNCIÓN