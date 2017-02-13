function empezarExamen(){
    pregunta=new Pregunta("enunciado Prueba",2);

    pregunta.setValor(3);
    let val=pregunta.getValor();
    val++;

    des=new Desarrollar();
    des.setRespuesta("la");

    let resp=des.getRespuesta();
    console.log('');
}
function recogerRespuestaExamen(xhr){
    if(xhr.readyState==4 && xhr.status==200){
        var examen=xhr.responseXML;
        if(document.getElementById("preguntasExamen")){
            document.getElementById("preguntasExamen").parentNode.removeChild(document.getElementById("preguntasExamen"));
        }
        var div=document.createElement('div');
        div.setAttribute("id","preguntasExamen");
       
        var h2=document.createElement('h2');
        h2.appendChild(document.createTextNode(examen.getElementsByTagName("nombre")[0].innerHTML));
        div.appendChild(h2);

        var h3=document.createElement('h3');
        h3.appendChild(document.createTextNode(examen.getElementsByTagName("fecha")[0].innerHTML));
        div.appendChild(h3);

        var preguntas=examen.getElementsByTagName("pregunta");
        for(var i=0;i<preguntas.length;i++){
            var p=document.createElement('p');
            p.appendChild(document.createTextNode(preguntas[i].getElementsByTagName('enunciado')[0].innerHTML));
            div.appendChild(p);
        }

        body=document.getElementsByTagName("body")[0];
        body.appendChild(div);
    }
}

function bajarExamen(){
    if(window.XMLHttpRequest)
		var xhr = new XMLHttpRequest(); // para todos los navegadores salvo IE
	if(window.ActiveXObject)
		var xhr = new ActiveXObject("Microsoft.XMLHTTP"); // para IE

    xhr.open('GET','./datos/examen_'+nombreExamen.value+'.xml');

    xhr.setRequestHeader('Accept','text/XML');

    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");

    xhr.onreadystatechange=function(){recogerRespuestaExamen(xhr);};

    xhr.send();
}

function recogerRespuesta(xhr){
     if(xhr.readyState==4 && xhr.status==200){
         if(xhr.responseText=="true"){
             bajarExamen();
         }
     }
}
function lanzarEnvio(examen,respuesta){
    function prepararDatos(examen,resuesta){
        
        datos="";

        datos+='nombre='+examen.nombre;
        datos+='&fecha='+examen.fecha;
        //let pregunta=examen.getPreguntas()[0];

        datos+='&enunciado='+examen.getPreguntas()[0].getEnunciado();
        datos+='&valor='+examen.getPreguntas()[0].getValor();
        datos+='&respuestaPropuesta='+respuesta.getRespuesta();
        
        return datos;
    }
    if(window.XMLHttpRequest)
		var xhr = new XMLHttpRequest(); // para todos los navegadores salvo IE
	if(window.ActiveXObject)
		var xhr = new ActiveXObject("Microsoft.XMLHTTP"); // para IE

    xhr.open('POST','./servidor/nuevaPregunta.php');

    xhr.setRequestHeader('Accept','text/XML');
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");

    xhr.onreadystatechange=function(){recogerRespuesta(xhr);};
    var datos=prepararDatos(examen,respuesta);

    xhr.send(datos);


}
function enviarPregunta(){

    let examen=new Examen(nombreExamen.value,fechaExamen.value);
    examen.setPregunta(new Pregunta(txtEnunciado.value,txtValor.value));
    let respuesta=new Desarrollar();
    respuesta.setRespuesta(txtRespuestaPropuesta.value)

    lanzarEnvio(examen,respuesta);
}
function asignarEventos(){
    let btn=document.getElementById("btnGuardar");
    btn.addEventListener("click",enviarPregunta);
}
window.onload=function(){
    asignarEventos();
}