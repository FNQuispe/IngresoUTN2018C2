function mostrar()
{
    var stringNumero1 = prompt("Escriba un numero");
    var stringNumero2 = prompt("Ahora escriba otro");

    var numero1Parseado = parseInt(stringNumero1);
    var numero2Parseado = parseInt(stringNumero2);

    var resultado = 0;

    if (stringNumero1 === stringNumero2) {
        alert("El numero concatenado es: " + stringNumero1 + stringNumero1);
    } else if (numero1Parseado > numero2Parseado) {
        resultado = numero1Parseado - numero2Parseado;
        alert("Resultado de la resta es: " + resultado);
    } else {
        resultado = numero1Parseado + numero2Parseado;
        if (resultado > 10) {
            alert("La suma es " + resultado + " y supero los 10");
        } else {
            alert("El resultado de la suma es: " + resultado);
        }
    }
}
