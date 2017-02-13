function ejercicio4(){
	function calcular(suma,multi,valor){
		return [suma+valor,multi*valor];
	}
	var valores;
	var arrayValores=new Array();
	var resultado=new Array();
	var suma=0;multip=1;

	try{
		valores=window.prompt("Inserta 10 numeros separados por coma");
		arrayValores=valores.split(",");
		if(arrayValores.length!=10){
			throw("No has introducido 10 valores separados por coma");
		}
		for(var i=0;i<10;i++){
			if(isNaN(parseInt(arrayValores[i]))){
				throw("No es numero válido");
			}else{
				[suma,multip]=calcular(suma,multip,Number(arrayValores[i]));
			}
		}
		resultado["Suma"]="La suma total es: "+suma;
		resultado["Multiuplicacion"]="La multipliacion total es: "+multip;
		/*
		}else{
			num=Number(numero);
			resultado[numero]=num.toExponential()+";";
		}*/
		mostrarResultado(resultado);
		
	}catch(error){
		mostrarResultado(error,true);
	}
}
