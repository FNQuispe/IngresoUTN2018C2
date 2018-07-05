function mostrar()
{
//tomo la edad  
    var edad = parseInt(document.getElementById("edad").value);

    if (edad < 13 || edad >= 18) {
        alert("Usted NO es adolescente");
    }

}//FIN DE LA FUNCIÓN