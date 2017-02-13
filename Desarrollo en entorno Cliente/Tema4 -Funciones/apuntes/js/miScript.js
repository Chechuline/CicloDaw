
//main
var saludo=function(){
	window.alert("funcion metida en variable");
}


window.onload = function(){
	window.alert("hola");
	document.write("<p>superpone esto a todo</p>");

	saludo();
}