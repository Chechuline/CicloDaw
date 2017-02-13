function ejercicio1(){
	var resultado=new Array();
	var angulo=window.prompt("Inserta valor del angulo");
	
	try{
		angulo=angulo.replace(",",".");
		if(isNaN(parseInt(angulo))){
			throw("No es un angulo valido");
		}
		var seno=Math.sin((angulo*Math.PI)/180);
		var cos=Math.cos((angulo*Math.PI)/180);
		var tan=Math.tan((angulo*Math.PI)/180);
		//resultado.concat(new Array("Seno",seno));
		resultado["seno"]=seno;
		resultado["coseno"]=cos;
		resultado["tangente"]=tan;
		// resultado[0]=seno;
		// resultado[1]=cos;
		// resultado[2]=tan;		
		mostrarResultado(resultado);
		
	}catch(error){
 		mostrarResultado(error,true);
	}	
}