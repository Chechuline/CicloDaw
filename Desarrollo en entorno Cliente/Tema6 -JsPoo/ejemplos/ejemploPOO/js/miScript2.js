var miVehiculo = new Object();

//propiedades
miVehiculo.motor="gasolina";
miVehiculo.pasajeros=2;
miVehiculo.velocidad=0;

//metodos
miVehiculo.acelerar=function(){this.velocidad++;};
miVehiculo.frenar=function(){this.velocidad--;};


window.onload=function(){
	console.log("tipo de vehiculo: " + miVehiculo.motor);
	console.log("pasajeros del vehiculo: " + miVehiculo.pasajeros);
	console.log("velocidad del vehiculo: " + miVehiculo.velocidad);

	miVehiculo.acelerar();

	console.log("velocidad del vehiculo acelerado: " + miVehiculo.velocidad);

	v1 = miVehiculo;

	console.log("velocidad del vehiculo v1: " + v1.velocidad);

	v1.frenar();

	console.log("velocidad del vehiculo v1: " + v1.velocidad);
	console.log("velocidad del vehiculo: " + miVehiculo.velocidad);	
}