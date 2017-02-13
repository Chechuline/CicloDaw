
function ejercicio10() {
	var resultado=[];
	var correo=window.prompt("Inserta un correo para validar");
	var regExp=new RegExp("/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/");

	try{
		if(correo==null || correo==''){
			throw("No se han insertado ningun correo")
		}
		correo=correo.trim();	

		if(regExp.test(correo)){
			resultado["CorreoValido"]=true;
		}else{
			resultado["CorreoValido"]=false;
		}

		mostrarResultado(resultado);
		

	}
	catch(error){
		mostrarResultado(error,true);
	}
	
}