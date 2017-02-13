//Creo el namespace Transportes
var Transportes = Transportes || {};

Transportes.Vehiculo = function (marca, modelo, combustible, personas, vel) {
	//publicas
	this.marca= marca || "Toyota";
	this.modelo= modelo || "Aurys";
	this.motor= combustible || "gasolina";
	this.pasajeros=personas || 0;

	//privada
	var velocidad=vel || 0;
		
	//metodos publicos
	this.acelerar=function(){velocidad++;};
	this.frenar=function(){velocidad--;};
	this.getVelocidad = function(){return velocidad;};
	this.setVelocidad = function(v){velocidad=v;};

	this.recogerPasajero = function(){this.pasajeros++;};
	this.dejarPasajero = function(){
								if(this.pasajeros>0)this.pasajeros--;
							};
}

Transportes.Moto = function (sidecar,marca, modelo, combustible, personas, vel){
	Transportes.Vehiculo.call(this,marca, modelo, combustible, personas, vel);
	// Transportes.Vehiculo.call(Transportes.Moto,marca, modelo, combustible, personas, vel); //Ejemplo de posible error al poner el moto en vez del this
	this.sidecar=sidecar || false;	

	this.recogerPasajero = function(){
		if(this.pasajeros <2) this.pasajeros++;
		else if(this.sidecar == true && this.pasajeros <3) this.pasajeros++;
		else throw "ErrorDemasiadosPasajeros";

	};
}

//Las motos heredan de Vehiculo
// Transportes.Moto.prototype = new Transportes.Vehiculo();

//Esto sería otra posibilidad para crear el Namespace...
// var Transportes = Transportes || {

// 	vehiculo: function(marca, modelo, combustible, personas, vel) {
// 		//Todo el código de la clase Vehiculo...
// 	}
// };