
function ejercicio9(){
	var resultado=[];
	var cadena=window.prompt("Inserta una cadena");
	var inversa='';
	try{
		if(cadena==null || cadena==''){throw("No se han insertado palabras")}
		for(var i=cadena.length-1; i>=0; i--){
			inversa+=cadena[i];
		} 

		(cadena === inversa)?resultado["palindromo"]="Sí":resultado["palindromo"]="No";

		mostrarResultado(resultado);
	}catch(error){
 		mostrarResultado(error,true);
	}
}