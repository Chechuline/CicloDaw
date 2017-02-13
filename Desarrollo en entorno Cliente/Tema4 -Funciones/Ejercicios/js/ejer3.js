function ejercicio3(){
	var num;
	var resultado=new Array();
	try{
		for(var i=0;i<10;i++){
			numero=window.prompt("Inserta numero para pasarlo a exponencial");

			if(isNaN(parseInt(numero))){
				throw("No es numero válido");
			}else{
				num=Number(numero);
				resultado[numero]=num.toExponential()+";";
			}
			mostrarResultado(resultado);
		}
	}catch(error){
		mostrarResultado(error,true);
	}
}