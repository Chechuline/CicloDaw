//CONSTRUCTOR
function vehiculo(marca, modelo, combustible, personas, vel) {
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

	// this.actualizarPasajeros = function(operacion){
	// 							if(operacion == "recoger") recogerPasajero();
	// 							if(operacion == "dejar") dejarPasajero();
	// 						};

	//metodos privados
	/*NO SE PUEDE ACCEDER A PROPIEDADES PUBLICAS DESDE METODOS PRIVADOS*/
	// function recogerPasajero() { this.pasajeros=this.pasajeros+1; }
	// function dejarPasajero() { this.pasajeros=this.pasajeros-1; }
}

function moto(sidecar,marca, modelo, combustible, personas, vel){
	vehiculo.call(this,marca, modelo, combustible, personas, vel);
	// vehiculo.call(moto,marca, modelo, combustible, personas, vel); //Ejemplo de posible error al poner el moto en vez del this
	this.sidecar=sidecar || false;	

	this.recogerPasajero = function(){
		if(this.pasajeros <2) this.pasajeros++;
		else if(this.sidecar == true && this.pasajeros <3) this.pasajeros++;
		else throw "ErrorDemasiadosPasajeros";

	};
}

//1a forma de herencia
//Hago que moto herede de vehiculo
// moto.prototype = new vehiculo();
