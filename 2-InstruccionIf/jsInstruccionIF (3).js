function mostrar()
{
//tomo la edad  
    var edad = parseInt(document.getElementById("edad").value);
    if (edad >= 18) {
        alert("Usted es mayor de edad");
    } else {
        alert("Sos menor de edad");
    }

}//FIN DE LA FUNCIÓN