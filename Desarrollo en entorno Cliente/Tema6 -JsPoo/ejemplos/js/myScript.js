
//Las 4 maneras de crear clases en JS
//clase vehículo
var vehiculo={
    //propiedades
    motor:"gasolina",
    pasajeros:2,
    velocidad:0,
    //metodos
    acelerar:function(){this.velocidad++;},
    frenar:function(){this.velocidad--;},


};//crea un objeto igual que el siguiente
//Con new Object()
var vehiculo2=new Object();
vehiculo2.motor='gas';
vehiculo2.pasajeros=2;
vehiculo2.acelerar=function(){"cosas";}
// es lo mismo que lo siguiente


//Solo ECMASCRIPT 6
class vehiculo4{
    //siempre tiene que existir un constructor
    constructor(){
        this.velocidad=0;
        this.pasajeros=0;
        this.motor="";
    }
    acelerar(){this.velocidad++;}
    frenar(){this.velocidad--;}

}


var arr=[[],[]];


//main
window.onload=function(){
    // para vehiculo o vehiculo2
    // console.log("tipo de vehiculo "+vehiculo.motor);
    // console.log("pasajeros del vehiculo "+vehiculo.pasajeros);
    // console.log("velocidad de vehiculo "+vehiculo.velocidad);
    // vehiculo.acelerar();
    // debugger;
    // console.log("velocidad de vehiculo "+vehiculo.velocidad);
    
    var miVehiculo=new vehiculo3("gasolina");
    //var miVehiculo=new vehiculo4();
    
    console.log("tipo de vehiculo "+miVehiculo.motor);
    console.log("pasajeros del vehiculo "+miVehiculo.pasajeros);
    console.log("velocidad de vehiculo "+miVehiculo.velocidad);
    miVehiculo.acelerar();
    
    console.log("velocidad de vehiculo "+miVehiculo.velocidad);

    var miMoto=new moto();
    var miVehiculo2=new vehiculo3();

    // miVehiculo.actualizarPasajero('subir');
    // console.log("despues de subir" + miVehiculo.pasajeros);

}