//Mezclando sintaxis de ES6 con la tradicional de constructores de Javascript
function vehiculo(marca, modelo, combustible, personas, vel) {
	//publicas
	this.marca= marca || "Toyota";
	this.modelo= modelo || "Aurys";
	this.motor= combustible || "gasolina";
	this.pasajeros=personas || 0;
	this.velocidad=vel || 0;
	//privada
	// var velocidad=vel || 0;
		
	//metodos publicos
	this.acelerar=function(){this.velocidad++;};
	this.frenar=function(){this.velocidad--;};
	this.getVelocidad = function(){return this.velocidad;};
	this.setVelocidad = function(v){this.velocidad=v;};

	this.recogerPasajero = function(){this.pasajeros++;};
	this.dejarPasajero = function(){
								if(this.pasajeros>0)this.pasajeros--;
							};
}

//La clase moto hereda de vehiculo
class moto extends vehiculo{
	constructor(sidecar, marca, modelo, combustible, personas, vel){
		super(marca, modelo, combustible, personas, vel); 
		this.sidecar=sidecar || false;		
		this.acelerar=function(){this.velocidad=this.velocidad+5;};
		this.recogerPasajero=function(){
							if(this.pasajeros <2) this.pasajeros++;
							else if(this.sidecar == true && this.pasajeros <3) this.pasajeros++;
							else throw "ErrorDemasiadosPasajeros";
						}
	}
}
