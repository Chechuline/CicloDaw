function ejercicio8(){
	var resultado=[];
	var cadena=window.prompt("Inserta una cadena");
	
	try{
		cadena=cadena.trim();
		if(cadena==null || cadena==''){throw("No se han insertado palabras")}

		var palabras=cadena.split(" ");
		resultado["palabras"]=palabras.length;
		mostrarResultado(resultado);	
	}catch(error){
 		mostrarResultado(error,true);
	}	
}