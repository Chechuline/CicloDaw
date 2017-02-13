function recogerRespuestaTxt(tipo,xhr){
    if(xhr.readyState==4 && xhr.status==200){
        switch(tipo){
        case 'txt':
                    var aux=document.createElement('p');
                    var txt=xhr.responseText;

                    aux.textContent=txt;
                    document.getElementById('resultado').appendChild(aux);
                    break;
        case 'comunidades':
            var objetoXml=xhr.responseXML;
            var comunidades=objetoXml.getElementsByTagName('CA');
            for(var i=0;i<comunidades.length;i++){
                var opcion=document.createElement('option');
                opcion.setAttribute('value',comunidades[i].innerHTML);
                opcion.textContent=comunidades[i].innerHTML;
                document.getElementById('comunidades').appendChild(opcion);
            }
        break;
        case 'provincias':
            var objetoXml=xhr.responseXML;
            var provincias=objetoXml.getElementsByTagName('Provincia');
            poblaciones=document.getElementById('poblaciones');
            while(poblaciones.firstChild){
               poblaciones.removeChild(poblaciones.firstChild);
            }
            for(var i=0;i<provincias.length;i++){
                var opcion=document.createElement('option');
                opcion.setAttribute('value',provincias[i].innerHTML);
                opcion.textContent=provincias[i].innerHTML;
                document.getElementById('poblaciones').appendChild(opcion);
            }
            document.getElementById('poblaciones').setAttribute('style','display:visible')
        break;
        }
    }

}

function lanzarAjax(){
    function limpiarCadena(cad){
        cad=cad.replace(/á/gi,"a");
        cad=cad.replace(/é/gi,"e");
        cad=cad.replace(/í/gi,"i");
        cad=cad.replace(/ó/gi,"o");
        cad=cad.replace(/ú/gi,"u");
        cad=cad.replace(/ñ/gi,"ni");

        return cad;
    }
    if(window.XMLHttpRequest)
		var xhr = new XMLHttpRequest(); // para todos los navegadores salvo IE
	if(window.ActiveXObject)
		var xhr = new ActiveXObject("Microsoft.XMLHTTP"); // para IE

    //si clickeamos en el boton de RecogerTexto
    switch(this.id){
    case 'mostrarTexto':
        xhr.open('GET',"./datos/saludo.txt");
        xhr.setRequestHeader('Accept','text/plain');
        xhr.onreadystatechange=function(){recogerRespuestaTxt('txt',xhr);};
        xhr.send(null);
    break;
    case 'comunidades':
        comunidad=limpiarCadena(this.selectedOptions[0].innerHTML);
       
        xhr.open('GET','./datos/'+comunidad+'.xml');
        xhr.setRequestHeader('Accept','text/XML');
        xhr.onreadystatechange=function(){recogerRespuestaTxt('provincias',xhr);};
        xhr.send(null);
    break;
    default:
        xhr.open('GET','./datos/CCAA.xml');
        xhr.setRequestHeader('Accept','text/XML');
        xhr.onreadystatechange=function(){recogerRespuestaTxt('comunidades',xhr);};
        xhr.send(null);
    break;
    }
}
function recogerRespuestaPhp(xhr){
    if(xhr.readyState==4 && xhr.status==200){
        var respuesta=xhr.responseText;
        document.getElementById('resultadoPhp').textContent=respuesta;
    }
}
function enviarPhp(datos){
    if(window.XMLHttpRequest)
		var xhr = new XMLHttpRequest(); // para todos los navegadores salvo IE
	if(window.ActiveXObject)
		var xhr = new ActiveXObject("Microsoft.XMLHTTP"); // para IE

    xhr.open('POST','./php/usuario.php');

    xhr.setRequestHeader('Accept','text/XML');

    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");

    xhr.onreadystatechange=function(){recogerRespuestaPhp(xhr);};

    xhr.send(datos);
}
function genEventos(){
    function rellenarComunidades(){
        lanzarAjax();
    }
    //Ejer 1
    var txtBoton=document.getElementById('mostrarTexto');
        txtBoton.addEventListener('click', lanzarAjax);

        //Ejer 2
        rellenarComunidades();    
    var sel=document.getElementById('comunidades');
        sel.addEventListener('change',lanzarAjax);

        //ejer 3
    var envi=document.getElementById('enviar');
        envi.addEventListener('click',function(){
            datos="usuario="+usuario.value+"&pass="+pass.value;
            enviarPhp(datos);
        });

}

window.onload=function(){
    genEventos();
}