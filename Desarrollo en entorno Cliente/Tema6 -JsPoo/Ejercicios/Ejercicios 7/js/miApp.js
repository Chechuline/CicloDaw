
var personasApp=personasApp || {};


function inciar(){
    var aficion1=new Aficion.Lector("Lectora","",true,"El regreso del catón","La carta esférica","Arturo Pérez Reverte");
    var persona1=new Persona.Datos("Maria de la O","Fernández","Martín",aficion1);

    var aficion2=new Aficion.Esquiador.Palillero("Palillera","",true,10,"Atomic","Salomon");
    var persona2=new Persona.Datos("Dolores","Fuertes","de Barriga",aficion2);

    var aficion3=new Aficion.Lector("Lectora","",false,"Ángeles y demonios","La isla de las tormentas","Ken Follet");
    var aficion4=new Aficion.Esquiador.Toblerone("Toblerona","",false,20,"beextreme","Burton","Nike");

    var arrAficiones=new Array(aficion3,aficion4);
    var persona3=new Persona.Datos("Enar","Mazón","Ruíz",arrAficiones);

    console.log(persona1);
    console.log(persona2);
    console.log(persona3);

    personasApp.pintar(persona1);
    personasApp.pintar(persona2);
    personasApp.pintar(persona3);
}

personasApp.obtenerDatos=function(ob){
    //var va1=ob.nombreAficion;
    var va2=ob.nombreAficion || "";
    var va1=ob.ultimoLibro || "";
    var va3=ob.libroFavorito || "";
    var va4=ob.autorFavorito || "";
    var va5=ob.diasSky_anio || 0;
    var va6=ob.skies || "";
    var va7=ob.botas || "";
    var va8=ob.tabla || "";
    var va9=ob.fijaciones || "";

    return new Array(va2,va1,va3,va4,va5,va6,va7,va8,va9);

}

personasApp.pintar=function(persona){
    var cuerpo=document.getElementById("cuerpo");

    var fila=document.createElement("tr");
    var col=document.createElement("td");

    //Add person data
    col.appendChild(document.createTextNode(persona.getNombre()));
    fila.appendChild(col);

    col=document.createElement("td");
    col.appendChild(document.createTextNode(persona.apellido1));
    fila.appendChild(col);

    col=document.createElement("td");
    col.appendChild(document.createTextNode(persona.apellido2));
    fila.appendChild(col);

    if(!Array.isArray(persona.aficiones)){
        //si no tiene varios
        var datos=personasApp.obtenerDatos(persona.aficiones);
        for(var i=0;i<datos.length;i++){
            col=document.createElement("td");
            col.appendChild(document.createTextNode(datos[i]));
            fila.appendChild(col);
        }

    }else{
        //si tiene varios
        var i=0;
        datos=new Array();
        while(persona.aficiones[i]!=undefined){
            datos[i]=personasApp.obtenerDatos(persona.aficiones[i]);
            i+=1;
        }
        var salida=new Array();
        for(var i=0;i<datos.length;i++){

            for(var j=0;j<datos[i].length;j++){
                if(!j==0){
                    (salida[j]==undefined || salida[j]=='' || salida[j]==0)?salida[j]=datos[i][j]:null;
                }else{
                    (salida[j]==undefined || salida[j]=='')?salida[j]=datos[i][j]:salida[j]+=' y '+datos[i][j];
                }
            }
        }
        for(var i=0;i<salida.length;i++){
            col=document.createElement("td");
            col.appendChild(document.createTextNode(salida[i]));
            fila.appendChild(col);
        }

    }
    
    cuerpo.appendChild(fila);

}


personasApp.main=function(){
    inciar(); 
}
