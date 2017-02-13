//funcion callaback que controla la respuesta del servidor
function recogerRespuestaXML(xhr){
    if(xhr.readyState==4 && xhr.status==200){
        //respuesta recibida correctamente con el recurso solicitado
        var pAux=document.createElement("p");
        
        var xml=xhr.responseXML;
        var elementos=xml.getElementsByTagName("Pais");
        for(var i=0;i<elementos.length;i++){
            pAux.appendChild(document.createTextNode(elementos[i].textContent));
            pAux.appendChild(document.createElement("br"));
        }
        document.getElementById("contenedor").appendChild(pAux);
    }else{
        console.log("readyState: "+ xhr.readyState);
        console.log("status: "+ xhr.status);
        console.log("----------------------------");
    }
}
function recogerRespuestaJson(xhr){
    if(xhr.readyState==4 && xhr.status==200){
        //respuesta recibida correctamente con el recurso solicitado
        var pAux=document.createElement("p");
        
        var respuesta=xhr.responseText;
        var json=JSON.parse(respuesta);
        for(var i=0;i<json.Paises.length;i++){
            pAux.appendChild(document.createTextNode(json.Paises[i].Pais));
            pAux.appendChild(document.createElement("br"));
        }
        /*for(var i=0;i<elementos.length;i++){
            pAux.appendChild(document.createTextNode(elementos[i].textContent));
            pAux.appendChild(document.createElement("br"));
        }*/
        document.getElementById("contenedor").appendChild(pAux);
    }else{
        console.log("readyState: "+ xhr.readyState);
        console.log("status: "+ xhr.status);
        console.log("----------------------------");
    }
}
function recogerRespuestaPHP(xhr){
    if(xhr.readyState==4 && xhr.status==200){
        //respuesta recibida correctamente con el recurso solicitado
        var pAux=document.createElement("p");
        
        var respuesta=xhr.responseText;

        
        pAux.appendChild(document.createTextNode(respuesta)); 


        document.getElementById("contenedor").appendChild(pAux);
    }else{
        console.log("readyState: "+ xhr.readyState);
        console.log("status: "+ xhr.status);
        console.log("----------------------------");
    }
}

function lanzarPeticionAjaxXML(){
    //1-crear objeto httprequest
    var xhr='';
    if(window.XMLHttpRequest)
        xhr=new XMLHttpRequest();//esto es para todos los navegadores salvo IE
    else
        xhr=new ActiveXObject("Microsoft.XMLHTTP");

    //2-abrir la conexion
    //xhr.open("GET","./datos/saludo.txt");
    xhr.open("GET","./datos/paises.xml");

    //3-Configuro cabeceras
    //xhr.setRequestHeader("Accept","text/plain");
    xhr.setRequestHeader("Accept","text/XML");

    //4-defino funcion callback
     xhr.onreadystatechange=function(){recogerRespuestaXML(xhr);};
     
    //5-lanzo peticion
    xhr.send();
}
function lanzarPeticionAjaxJson(){
    //1-crear objeto httprequest
    var xhr='';
    if(window.XMLHttpRequest)
        xhr=new XMLHttpRequest();//esto es para todos los navegadores salvo IE
    else
        xhr=new ActiveXObject("Microsoft.XMLHTTP");

    //2-abrir la conexion
    //xhr.open("GET","./datos/saludo.txt");
    xhr.open("GET","./datos/paises.json");

    //3-Configuro cabeceras
    //xhr.setRequestHeader("Accept","text/plain");
    xhr.setRequestHeader("Accept","text/plain");

    //4-defino funcion callback
     xhr.onreadystatechange=function(){recogerRespuestaJson(xhr);};
     
    //5-lanzo peticion
    xhr.send();
}
function lanzarPeticionAjaxPHP(datos){
    
    
    
    
    //1-crear objeto httprequest
    var xhr='';
    if(window.XMLHttpRequest)
        xhr=new XMLHttpRequest();//esto es para todos los navegadores salvo IE
    else
        xhr=new ActiveXObject("Microsoft.XMLHTTP");

    //2-abrir la conexion
    //xhr.open("GET","./datos/saludo.txt");
    xhr.open("POST","./usuario.php");

    //3-Configuro cabeceras
    //xhr.setRequestHeader("Accept","text/plain");
    xhr.setRequestHeader("Accept","text/plain");

    //4-defino funcion callback
     xhr.onreadystatechange=function(){recogerRespuestaPHP(xhr);};
     
    //5-lanzo peticion
    xhr.send(datos);
}

function asignarEventos(){
    document.getElementById("pedirXML").addEventListener("click",function(){
        lanzarPeticionAjaxXML();
    });

    document.getElementById("pedirJson").addEventListener("click",function(){
        lanzarPeticionAjaxJson();
    });
    document.getElementById("pedirPHP").addEventListener("click",function(){
        lanzarPeticionAjaxPHP("usuario=lala$pass=lele");
    });
}

//main
window.onload=function(){
    asignarEventos();
}
