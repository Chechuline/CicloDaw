function ejercicio2(){
	var resultado=new Array();
	var binario='';
	function calcular(numero){

		return "Valor Binario: "+aBinario(numero)+" Valor Hexadecimal: " + aHexa(numero);
	}
	function aBinario(numero){
		var ret=new Array();
		while(numero>1){
			ret.unshift(numero%2);
			numero=parseInt(numero/2);
		}
		ret.unshift(numero);				
		return ret.toString().replace(/,/g,"");		
		// Nas=as.reverse().toString();		
		// Nas=Nas.replace(',','');
		// return Nas.replace(',','');
	}
	function aHexa(numero){
		var ret=new Array();
		while (numero>9){//%16
			switch(numero%16){
				case 10: ret.unshift('A');break;
				case 11: ret.unshift('B');break;
				case 12: ret.unshift('C');break;
				case 13: ret.unshift('D');break;
				case 14: ret.unshift('E');break;
				case 15: ret.unshift('F');break;
				default: ret.unshift(numero%16);break;
			}
			numero=parseInt(numero/16);
		}
		(numero!=0)?ret.unshift(numero):null;
		return ret.toString().replace(/,/g,"");
	}
	var numero;
	try{
		for(var i=0;i<10;i++){
			numero=window.prompt("Inserta numero para pasar a binario y hexadecimal");

			if(isNaN(parseInt(numero)) || parseInt(numero)<0){
				throw("No es numero válido");
			}else{
				resultado[numero]=(calcular(parseInt(numero)));
			}
			mostrarResultado(resultado);
		}
	}catch(error){
		mostrarResultado(error,true);
	}

}