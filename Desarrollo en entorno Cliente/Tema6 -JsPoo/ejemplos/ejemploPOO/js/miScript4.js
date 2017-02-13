//MAIN
window.onload=function(){	
	var miCoche = new vehiculo("Peugeot", "308", "hibrido", 5, 0);

	var miMoto = new moto(false,"BMW", "1200RT", "gasolina", 2, 140);

	console.log("Mi coche es un: " + miCoche.marca);
	console.log("Mi moto es una: " + miMoto.marca);

	console.log("Mi coche va a: " + miCoche.velocidad);	
	miCoche.acelerar();
	console.log("Mi coche va a: " + miCoche.velocidad);	

	console.log("Mi moto va a: " + miMoto.velocidad);	
	miMoto.acelerar();
	console.log("Mi moto va a: " + miMoto.velocidad);	

	console.log("------------------------------------------------");

	var miVehiculo = new vehiculo();

	console.log("tipo de vehiculo: " + miVehiculo.motor);
	console.log("pasajeros del vehiculo: " + miVehiculo.pasajeros);
	console.log("velocidad del vehiculo: " + miVehiculo.velocidad);

	miVehiculo.acelerar();

	console.log("velocidad del vehiculo acelerado: " + miVehiculo.velocidad);

	v1 = miVehiculo;

	// console.log("velocidad del vehiculo v1: " + v1.getVelocidad());
	console.log("velocidad del vehiculo v1: " + v1.velocidad);

	v1.frenar();

	console.log("velocidad del vehiculo v1: " + v1.velocidad);
	console.log("velocidad del vehiculo: " + miVehiculo.velocidad);	

	console.log("pasajeros del vehiculo: " + miVehiculo.pasajeros);	

	// miVehiculo.actualizarPasajeros("recoger");	
	miVehiculo.recogerPasajero();

	console.log("pasajeros del vehiculo despues de recoger: " + miVehiculo.pasajeros);	

	// console.log("el conductor del vehiculo es: " + miVehiculo.getConductor());	
	// vehiculo.setConductor("Carlos");	
	// console.log("el conductor del vehiculo es: " + miVehiculo.getConductor());	

}