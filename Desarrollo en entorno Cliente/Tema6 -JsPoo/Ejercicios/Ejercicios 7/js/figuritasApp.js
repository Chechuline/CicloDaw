var figuritasApp=figuritasApp || {};

figuritasApp.enviar=function(){
    //obtengo los datos
    //creo el objeto en funcion del option seleccionado
    var va=document.getElementsByName("figuras")[0].selectedOptions[0].value;
    var fig;
    switch(va){
        case "0":   fig=new Figuritas.Circulo(va,posX.value,posY.value,radio.value)
                    break;
        case "1":   fig=new Figuritas.Linea(va,posX.value,posY.value,longitud.value)
                    break;
        case "2":   fig=new Figuritas.Triangulo(va,posX.value,posY.value,lado.value)
                    break;
        case "3":   fig= new Figuritas.Cuadrado(va,posX.value,posY.value,lado.value)
                    break;

    }
    //pinto
    figuritasApp.pintar(document.getElementById('lienzo'),fig);
}

figuritasApp.pintar=function(lienzo,figura){
    //lienzo
    var pint=new Vista.Base(lienzo,figura,figura.posX,figura.posY);
    pint.pintar(figura);
    
}

figuritasApp.cambiarOpcion=function(){

    function eliminarHijos(aCambiar){
        
        while(aCambiar.hasChildNodes()){aCambiar.removeChild(aCambiar.firstChild)}
    }

    var valor=this.selectedOptions[0].value;
    var aCambiar=document.getElementById('opcion');
    switch(valor){
        case "0":   eliminarHijos(aCambiar);
                    var lbl=document.createElement('label');
                    lbl.setAttribute("for","radio");
                    lbl.appendChild(document.createTextNode('radio'));
                    aCambiar.appendChild(lbl);
                    var inpt=document.createElement('input');
                    inpt.setAttribute("type","number");
                    inpt.setAttribute("value","0");
                    inpt.setAttribute("id","radio");
                    aCambiar.appendChild(inpt);
            break;
        case "1":   eliminarHijos(aCambiar);
                    var lbl=document.createElement('label');
                    lbl.setAttribute("for","longitud");
                    lbl.appendChild(document.createTextNode('longitud'));
                    aCambiar.appendChild(lbl);
                    var inpt=document.createElement('input');
                    inpt.setAttribute("type","number");
                    inpt.setAttribute("value","0");
                    inpt.setAttribute("id","longitud");
                    aCambiar.appendChild(inpt);
            break;
        case "2":
        case "3":   eliminarHijos(aCambiar);
                    var lbl=document.createElement('label');
                    lbl.setAttribute("for","lado");
                    lbl.appendChild(document.createTextNode('lado'));
                    aCambiar.appendChild(lbl);
                    var inpt=document.createElement('input');
                    inpt.setAttribute("type","number");
                    inpt.setAttribute("value","0");
                    inpt.setAttribute("id","lado");
                    aCambiar.appendChild(inpt);
            break;
        
    }
    console.log(valor);
}

figuritasApp.eventos= function(){
    var selector=document.getElementsByName('figuras')[0];
    selector.addEventListener('change',figuritasApp.cambiarOpcion);

    var boton=document.getElementById('pintarFigura');
    boton.addEventListener('click',figuritasApp.enviar);
}

figuritasApp.inicio=function(){
    figuritasApp.eventos();
}

figuritasApp.main=function(){
    figuritasApp.inicio();
}

