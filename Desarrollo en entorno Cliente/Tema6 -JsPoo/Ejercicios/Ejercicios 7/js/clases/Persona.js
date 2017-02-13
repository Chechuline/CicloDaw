var Persona=Persona || {};

// Persona.Datos = function(nombre,apellido1,apellido2,aficiones){
//     this.nombre=nombre || "";
//     this.apellido1=apellido1 || "";
//     this.apellido2=apellido2 || "";
//     this.aficiones=aficiones || new Array();

//     this.getNombre= function(){ return this.nombre;};
// }

Persona.Datos = class{
    constructor(nombre,apellido1,apellido2,aficiones){
        this.nombre=nombre || "";
        this.apellido1=apellido1 || "";
        this.apellido2=apellido2 || "";
        this.aficiones=aficiones || new Array();
    }

    //metodos
    getNombre(){return this.nombre}
}