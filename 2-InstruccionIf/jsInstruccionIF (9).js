function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	function getRandomInt(min, max) {
 	 return Math.floor(Math.random() * (max - min)) + min;
	}

	alert(getRandomInt(1,10));

}//FIN DE LA FUNCIÓN