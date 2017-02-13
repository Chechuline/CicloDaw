//Funcion callback que controla la respuesta del servidor
function recogerRespuesta(xhr){
	if(xhr.readyState==4 && xhr.status==200){ // Respuesta recibida correctamente y con el recurso correcto
		try {
			var per1=JSON.parse(xhr.responseText); 

			//Si llego aquí es que he recibido un JSON
			var mensaje="";
			mensaje = mensaje + per1.nombre + " tiene " + per1.edad +" años. Vive en " + per1.domicilio + ", y ha estudiado:";
			for (var i = per1.estudios.length - 1; i >= 0; i--) {
				mensaje = mensaje + per1.estudios[i] + ", ";
			}
		} catch(e) {
			// statements
			console.log(e);
			if(e instanceof SyntaxError){//no he recibido un JSON
				mensaje="Desde javascript: " + xhr.responseText;				
			} 
		}
		finally { //muestro el mensaje en el html
			var paux= document.createElement("p");		
			paux.appendChild(document.createTextNode(mensaje));
			document.getElementById("contenedor").appendChild(paux);				
		}
	}
	else{
		console.log("readyState:" + xhr.readyState);
		console.log("status:" + xhr.status);
		console.log("--------------------------------------");
	}
}

//Funcion callback que controla la respuesta XML del servidor
function recogerRespuestaXML(xhr){
	if(xhr.readyState==4 && xhr.status==200){ // Respuesta recibida correctamente y con el recurso correcto
		//recojo el document XML que me ha enviado el servidor
		var docXML =  xhr.responseXML;
		var paises = docXML.getElementsByTagName("Pais");

		for(var i = 0; i < paises.length; i++){
			var paux= document.createElement("p");		
			console.log(paises[i].firstChild);
			paux.appendChild(document.createTextNode(paises[i].firstChild.nodeValue));
			document.getElementById("contenedor").appendChild(paux);
		}
	}
	else{
		console.log("readyState:" + xhr.readyState);
		console.log("status:" + xhr.status);
		console.log("--------------------------------------");
	}
}

//Funcion que lanza la petición AJAX
//Recibe 4 parametros:
// metodo -> GET || POST
// URL -> El recurso que le solicitamos al servidor
// tipo.
// 	Si tipo == 0 entonces estoy esperando texto
// 	Si tipo == 1 entonces estoy esperando XML
// datos -> los datos para enviar en una peticion POST

// 1.-Creo un objeto XMLHttpRequest
// 2.-Abro la conexión
// 3.-Configuro las cabeceras
// 4.-Defino la funcion de callback
// 5.-Lanzo la petición
function lanzarPeticionAJAX(metodo, URL, tipo,datos){
	// 1.-Creo un objeto XMLHttpRequest
	if(window.XMLHttpRequest)
		var xhr = new XMLHttpRequest(); // para todos los navegadores salvo IE
	if(window.ActiveXObject)
		var xhr = new ActiveXObject("Microsoft.XMLHTTP"); // para IE

	// 2.-Abro la conexión
	// xhr.open("GET","./datos/saludo.txt");
	xhr.open(metodo,URL,true);
	
	// 3.-Configuro las cabeceras
	if(tipo == 0){ //Espero texto
		xhr.setRequestHeader("Accept", "text/plain");
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded")
		// 4.-Defino la funcion de callback
		xhr.onreadystatechange=function(){recogerRespuesta(xhr);};
	}  		
	else{
		xhr.setRequestHeader("Accept", "text/xml");
		// 4.-Defino la funcion de callback
		xhr.onreadystatechange=function(){recogerRespuestaXML(xhr);};
	}

	// 4.-Defino la funcion de callback
	// xhr.onreadystatechange=recogerRespuesta(xhr);
	// xhr.onreadystatechange=function(){recogerRespuesta(xhr);};

	// 5.-Lanzo la petición
	if(metodo == "GET")	xhr.send(null);
	if(metodo == "POST")	xhr.send(datos);
}

//Asignamos los eventos a los elementos HTML
function asignarEventos() {
	document.getElementById("btnEnviar").addEventListener("click",function(){
																lanzarPeticionAJAX("GET","./datos/saludo.txt",0);
															});

	document.getElementById("btnEnviar2").addEventListener("click",function(){
																lanzarPeticionAJAX("GET","./datos/paises.xml",1);
															});

	document.getElementById("btnEnviar3").addEventListener("click",function(){
																lanzarPeticionAJAX("GET","./datos/datosPersona.json",0);
															});

	document.getElementById("btnEnviar4").addEventListener("click",function(){
																lanzarPeticionAJAX("GET","./php/saludo.php?nombre=Carlos&passwd=12345",0);
															});
	document.getElementById("btnEnviar5").addEventListener("click",function(){
																lanzarPeticionAJAX("POST","./php/saludo.php",0,"nombre=Carlos&passwd=12345");
															});
}

//MAIN
window.onload=function(){
	asignarEventos();
}