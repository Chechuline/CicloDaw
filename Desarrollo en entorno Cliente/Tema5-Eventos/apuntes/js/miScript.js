
//main
function saludo(){
	window.alert("Hola!");
}
function crearelementosHTML(contenedor){
	var nuevaImagen,plorem, div;
	//meter imagen
	nuevaImagen=document.createElement("img");
	nuevaImagen.setAttribute("src","./img/deadPool.jpg");
	nuevaImagen.setAttribute("alt","imagen deadpool");
	nuevaImagen.setAttribute("title","deadpool");


	contenedor.appendChild(nuevaImagen);
	//meter parrafo
	var plorem=document.createElement("p");
	plorem.innerHTML="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	contenedor.appendChild(plorem);
	
	//div

}
//setinterval y settimeout
function temporizadores(){
	var miImg = document.createElement("img");
	miImg.setAttribute("src","./img/deadPool.jpg");

	document.getElementById("ppal").appendChild(miImg);



}

//MAIN
window.onload = function(){
	var btnEjer2=document.getElementById("btn2");
	//soporta dos parametros 1-> nombre de evento, 2-> codigo a ejecutar cuando se produce evento
	btnEjer2.addEventListener("click",function(){
		//texto de la funcion a ejecutar

	});

	crearelementosHTML(document.getElementById("seccion"));

	// var idt1=window.setTimeout(temporizadores,5000);
	// console.log("identificador de timeout: "+idt1);

	var idt2=window.setInterval(temporizadores,2500);
	console.log("identificador de interval: "+idt2);	

	window.setTimeout(function(){window.clearInterval(idt2); },5001);
}
