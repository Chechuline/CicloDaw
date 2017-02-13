// //guarda el dato  que se le pase en localStorage o sessionStorage
// //almacen: 0 -> localStorage
// //almacen: 1 -> sessionStorage
function escribirStorage(dato,almacen){
	if (almacen==0) { //localStorage
		window.localStorage.setItem(dato.id, dato.value)
	} 
	else { //sessionStorage
		window.sessionStorage.setItem(dato.id, dato.value)
	}
}

function recogerDatos(){
	var inputs = document.getElementsByTagName("input");
	for(var i = 0, length1 = inputs.length; i < length1; i++){
		escribirStorage(inputs[i],0); //guardo los inputs en el localStorage
		// escribirStorage(inputs[i],1); //guardo los inputs en el sessionStorage
	}
}

function limpiarAlmacenamientoLocal(){
	// para eliminar todos los datos de localStorage
	window.localStorage.clear();	
	//para eliminar un elemento en concreto
	window.localStorage.removeItem("txtNombre");
	window.localStorage.removeItem("numEdad");
}

function asignarEventos() {
	var inputs = document.getElementsByTagName("input");
	for(var i = 0, length1 = inputs.length; i < length1; i++){
		inputs[i].addEventListener("blur",recogerDatos);
	}
}


//main
window.onload=function(){
	limpiarAlmacenamientoLocal();
	asignarEventos();
};

