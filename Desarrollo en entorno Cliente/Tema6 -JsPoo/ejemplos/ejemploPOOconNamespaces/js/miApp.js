//creo el namespace de mi aplicacion
var miApp = miApp || {};

miApp.verDescripcion = function(){
	return "El " + this.marca + " " + this.modelo + " lleva " + this.pasajeros + " pasajeros, y circula a " + this.getVelocidad() + "km/h";
}

miApp.main = function(){
	//Ejemplos de objetos vehiculo y moto
	//y de su herencia
	var miCoche = new Transportes.Vehiculo("Peugeot", "308", "hibrido", 5, 0);

	// var miMoto = new moto(); //no le paso nada -> sidecar = false

	//creo de nuevo miMoto para pasarle los valores que me interesan
	var miMoto = new Transportes.Moto(false,"BMW", "1200RT", "gasolina", 2, 140);

	console.log("Mi coche es un: " + miCoche.marca);
	console.log("Mi moto es una: " + miMoto.marca);
	
	//Ejemplo para ver el call de una función
	var miVehiculo = new Transportes.Vehiculo("Peugeot", "308", "hibrido", 5, 0,"Carlos","Carmen");
	var miVehiculo2 = new Transportes.Vehiculo("BMW", "1200RT", "gasolina", 2, 140,"Guillermo","David");

	console.log(miApp.verDescripcion.call(miVehiculo));	
	console.log(miApp.verDescripcion.call(miVehiculo2));

	console.log("----------------------------------------------");

	//Ejemplos de como crear un objeto 
	//de acceder a las propiedades y metodos de ese objeto
	//creación de una variable que apunta al mismo objeto(v1)
	console.log("tipo de vehiculo: " + miVehiculo.motor);
	console.log("pasajeros del vehiculo: " + miVehiculo.pasajeros);
	console.log("velocidad del vehiculo: " + miVehiculo.getVelocidad());

	miVehiculo.acelerar();

	console.log("velocidad del vehiculo acelerado: " + miVehiculo.getVelocidad());

	v1 = miVehiculo;

	console.log("velocidad del vehiculo v1: " + v1.getVelocidad());

	v1.frenar();

	console.log("velocidad del vehiculo v1: " + v1.getVelocidad());
	console.log("velocidad del vehiculo: " + miVehiculo.getVelocidad());	

	console.log("pasajeros del vehiculo: " + miVehiculo.pasajeros);	

	// miVehiculo.actualizarPasajeros("recoger");	
	miVehiculo.recogerPasajero();

	console.log("pasajeros del vehiculo despues de recoger: " + miVehiculo.pasajeros);	

	
}