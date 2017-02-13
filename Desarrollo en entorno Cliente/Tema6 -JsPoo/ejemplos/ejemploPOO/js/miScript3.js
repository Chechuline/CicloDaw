//funcion auxiliar
function verDescripcion(){
	return "El " + this.marca + " " + this.modelo + " lleva " + this.pasajeros + " pasajeros, y circula a " + this.getVelocidad() + "km/h";
}


window.onload=function(){

	//Ejemplos de objetos vehiculo y moto
	//y de su herencia
	var miCoche = new vehiculo("Peugeot", "308", "hibrido", 5, 0);

	// var miMoto = new moto(); //no le paso nada -> sidecar = false

	//creo de nuevo miMoto para pasarle los valores que me interesan
	var miMoto = new moto(false,"BMW", "1200RT", "gasolina", 2, 140);

	console.log("Mi coche es un: " + miCoche.marca);
	console.log("Mi moto es una: " + miMoto.marca);
	console.log("(constructor)Mi moto es una: " + miMoto.constructor.marca); //Cuidado con esto. Esto nos aparece así porque en el call no hemos puesto this, si no el nombre de la clase moto.

	//Ejemplo para ver el call de una función
	var miVehiculo = new vehiculo("Peugeot", "308", "hibrido", 5, 0,"Carlos","Carmen");
	var miVehiculo2 = new vehiculo("BMW", "1200RT", "gasolina", 2, 140,"Guillermo","David");

	console.log(verDescripcion.call(miVehiculo));	
	console.log(verDescripcion.call(miVehiculo2));

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