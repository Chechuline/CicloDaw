function recogerRespuestaXml(xhr){
    if(xhr.readyState==4 && xhr.status==200){
        elementosMostrados=document.getElementById('noticias').childNodes.length;
        var objetoXml=xhr.responseXML;
        
        var noticias=objetoXml.getElementsByTagName('noticia');
        
        for(var i=elementosMostrados;i<noticias.length;i++){
            var divNoticia=document.createElement('div');
            var cabeceraAux=document.createElement('h3');
            datosCabecera=noticias[i].getElementsByTagName('cabecera')[0];
            cabeceraAux.innerHTML=datosCabecera.innerHTML;
            var cuerpoAux=document.createElement('p');
            cuerpoAux.innerHTML=noticias[i].getElementsByTagName('cuerpo')[0].innerHTML;
            var autorAux=document.createElement('small');
            autorAux.innerHTML=noticias[i].getElementsByTagName('autor')[0].innerHTML;
            var imgAux=document.createElement('img');
            imgAux.setAttribute("width","50");
            imgAux.setAttribute("height","50");
            imgAux.setAttribute("src","data:image/png;base64,"+noticias[i].getElementsByTagName('imagen')[0].innerHTML);

            cuerpoAux.appendChild(autorAux);
            divNoticia.appendChild(cabeceraAux);
            divNoticia.appendChild(cuerpoAux);
            divNoticia.appendChild(imgAux);
            document.getElementById('noticias').appendChild(divNoticia);
            
        }
        
        elementosMostrados=noticias.length;
    
    }
}
function buscarNoticias(){
    if(window.XMLHttpRequest)
		var xhr = new XMLHttpRequest(); // para todos los navegadores salvo IE
	if(window.ActiveXObject)
		var xhr = new ActiveXObject("Microsoft.XMLHTTP"); // para IE

        xhr.open('GET','./php/noticias.php');
        xhr.setRequestHeader('Accept','text/XML');
        xhr.onreadystatechange=function(){recogerRespuestaXml(xhr);};
        xhr.send("accion=GET");
}
function recogerRespuestaPut(xhr){
    if(xhr.readyState==4 && xhr.status==200){
        if(xhr.responseText=='OK'){
            document.forms[0].titulo.value='';
            document.forms[0].cuerpo.value='';
            document.forms[0].autor.value='';
            window.alert("subido correctamente");
        }else{
            window.alert("error al subir noticia");
        }
    }
    console.log("Estado: "+xhr.readyState);
    console.log("Num Status: "+xhr.status);
    console.log("Response Text: "+xhr.responseText);
    console.log("---------------------------------------");
}
function subirNoticia(datos){
    if(window.XMLHttpRequest)
		var xhr = new XMLHttpRequest(); // para todos los navegadores salvo IE
	if(window.ActiveXObject)
		var xhr = new ActiveXObject("Microsoft.XMLHTTP"); // para IE

        xhr.open('POST','./php/noticias.php');
        //xhr.setRequestHeader("Content-type","multipart/form-data");
        //xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        
        xhr.onreadystatechange=function(){recogerRespuestaPut(xhr);};
        data=JSON.parse(datos);
        let formData = new FormData();
            formData.append("titulo",data.titulo);
            formData.append("cuerpo",data.cuerpo);
            formData.append("autor",data.autor);
            formData.append("img",imagen.files[0]);
            formData.append("accion",data.accion);

        xhr.send(formData);
}
function genEventos(){
    var elementosMostrados=0;
    //busqueda inicial
    buscarNoticias();
    //creamos el intervalo 
    window.setInterval(buscarNoticias,10000);

    var btn=document.getElementById('enviar');
    btn.addEventListener("click",function(){
        // var datos="titulo="+titulo.value+"&cuerpo="+cuerpo.value+"&autor="+autor.value+"&img="+imagen.files[0]+"&accion=PUT";
    
        //var datos="{'titulo':'"+titulo.value+"','cuerpo':'"+cuerpo.value+"','autor':'"+autor.value+"','img':'"+imagen.files[0]+"','accion':'PUT'}";
        var datos='{"titulo":"'+titulo.value+'","cuerpo":"'+cuerpo.value+'","autor":"'+autor.value+'","img":"imagen.files[0]","accion":"PUT"}';

        subirNoticia(datos);
    });
}

window.onload=function(){
    genEventos();
}