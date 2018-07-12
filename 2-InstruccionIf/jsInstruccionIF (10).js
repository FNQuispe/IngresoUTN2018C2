function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	numeroRandom = getRandomInt(1,11);
	if (numeroRandom > 9 ) {
		alert("EXCELENTE");
	} else if (numeroRandom > 4 ) {
		alert("APROBO");
	} else {
		alert("Vamos, la proxima se puede");
	}

}//FIN DE LA FUNCIÓN

function getRandomInt(min, max) {
 	 return Math.floor(Math.random() * (max - min)) + min;
}