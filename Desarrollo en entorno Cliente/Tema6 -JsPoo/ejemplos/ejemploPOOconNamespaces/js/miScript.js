//clase vehiculo
var v1={
	//propiedades
	motor:"gasolina",
	pasajeros:2,
	velocidad:0,

	//metodos
	acelerar:function(){this.velocidad++;},
	frenar:function(){this.velocidad--;},
};

//main
window.onload=function(){

console.log("tipo de vehiculo: " + vehiculo.motor);
console.log("pasajeros del vehiculo: " + vehiculo.pasajeros);
console.log("velocidad del vehiculo: " + vehiculo.velocidad);

vehiculo.acelerar();

console.log("velocidad del vehiculo acelerado: " + vehiculo.velocidad);

v1 = vehiculo;

console.log("velocidad del vehiculo v1: " + v1.velocidad);

v1.frenar();

console.log("velocidad del vehiculo v1: " + v1.velocidad);
console.log("velocidad del vehiculo: " + vehiculo.velocidad);
}