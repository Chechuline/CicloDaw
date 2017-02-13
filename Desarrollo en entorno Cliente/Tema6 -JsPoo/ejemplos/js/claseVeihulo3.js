function vehiculo3(motor){//-> constructor
    //los metodos y propiedades solo son accesibles si tienen this., si no seran metodos o propiedades privadas
    //publicas
    this.motor=motor || "gas";
    this.pasajeros=2;
    
    //no puedo acceder a metodos privados desde operaciones publicas, por lo tanto este fragmento no funciona
    // this.actualizarPasajero=function(operacion){
    //     if(operacion=='subir') recogerPasajero();
    // }

    //privadas
    var velocidad;

    //metodos publicos
    this.acelerar=function(){velocidad++;}
    this.frenar=function(){velocidad--;}
    this.getVelovidad=function(){return velocidad;}

    //metodos privados
    function recogerPasajero(){this.pasajeros++;}
    function dejarPasajero(){this.pasajeros++;}
}
//Herencia

function moto(){
    this.sidecar=false;


    function recogerPasajero(){
        if(this.pasajeros<2){this.pasajeros++;}else{ throw "Error demasiados pasajeros";}
        
    }
}
//Proto es la manera de generar la herencia
moto.prototype= new vehiculo3();

//segunda manera de herencia
//con call hacemos llamamos a la clase de la que heredamos pudiendo referencias datos especificos
/*
function moto(){
    vehiculo.call(this);

    this.recogerPasajero=function(){
        if(this.pasajeros<2){this.pasajeros++;}else{ throw "Error demasiados pasajeros";}

    }
}*/