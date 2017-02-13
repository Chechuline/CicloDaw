
function ejercicio7(){

	var cad=window.prompt("Inserta una cadena");
	var resultado=new Array();
	resultado["inversa"]='';
	try{
		//!(cad=='')? null:throw("Cadena vacia");
		if(cad=='' || cad==null){throw("Cadena vacia");}
		for(var i=cad.length-1; i>=0; i--){
			resultado["inversa"]+=cad[i];
		} 
		mostrarResultado(resultado);
	}catch(error){
 		mostrarResultado(error,true);
	}		

}