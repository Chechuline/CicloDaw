var Transportes=Transportes || {};
//Namespaces utilizando ES6 con clases anonimas
Transportes.Vehiculo = class{
	//Siempre tiene que aparecer
	constructor(marca,modelo,motor,pasajeros,vel){
		//propiedades privada		OJO! ESTO NO FUNCIONA
		//var conductor="";			

		//propiedades publicas
		this.marca=marca || "Toyota";
		this.modelo=modelo || "Aurys"
		this.motor=motor || "gasolina";
		this.pasajeros=pasajeros || 0;
		this.velocidad=vel || 0;
	}

	//metodos publicos
	acelerar(){this.velocidad++;}
	frenar(){this.velocidad--;}

	recogerPasajero(){this.pasajeros++;}
	dejarPasajero(){this.pasajeros--;}

	getVelocidad(){return this.velocidad;};
	setVelocidad(v){this.velocidad=v;};

	// OJO! ESTO NO FUNCIONA
	setConductor(nombre){conductor=nombre;}
	getConductor(){return conductor;}
}

//La clase Moto hereda de Vehiculo
Transportes.Moto = class extends Transportes.Vehiculo{
	constructor(sidecar, marca, modelo, combustible, personas, vel){
		super(marca, modelo, combustible, personas, vel); 
		this.sidecar=sidecar || false;		
	}
	
	acelerar(){this.velocidad=this.velocidad+5;}

	recogerPasajero(){
		if(this.pasajeros <2) this.pasajeros++;
		else if(this.sidecar == true && this.pasajeros <3) this.pasajeros++;
		else throw "ErrorDemasiadosPasajeros";

	}
}
