var Aficion=Aficion || {};

/*Aficion.Datos=class{
    constructor(nombre, epoca, individual){
        this.nombreAficion=nombre || "";
        this.epoca=epoca || "";
        this.individual=individual || true;
    }

    getNombreAficion(){return this.nombreAficion};

}*///Usando ECMASCRIPT6

Aficion.Datos = function(nombreAficion, epoca, individual){
    this.nombreAficion=nombreAficion || "";
    this.epoca=epoca || "";
    this.individual=individual || true;

    this.getNombreAficion=function(){return this.nombreAficion;};
}

/*Aficion.Lector=class extends Aficion.Datos{
    constructor(nombre, epoca, individual, ultimoLibro, libroFavorito,autorFavorito){
        super(nombre, epoca, individual);

        this.ultimoLibro=ultimoLibro || "";
        this.libroFavorito=libroFavorito || "";
        this.autorFavorito = autorFavorito || "";
    }
}*///Usando ECMASCRIPT6

/**
 * Lector
 * @constructor 
 * @param (string) nombre - nombre del lector; 
 */
Aficion.Lector=function(nombre, epoca, individual, ultimoLibro, libroFavorito,autorFavorito){

    Aficion.Datos.call(this,nombre, epoca, individual);

    this.ultimoLibro=ultimoLibro || "";
    this.libroFavorito=libroFavorito || "";
    this.autorFavorito = autorFavorito || "";

}

Aficion.Esquiador=function(nombre, epoca, individual, diasSky_anio){
    
    Aficion.Datos.call(this,nombre, epoca, individual); //super(nombre, epoca, individual)

    this.diasSky_anio=diasSky_anio || 0;
}
Aficion.Esquiador.Palillero=function(nombre, epoca, individual, diasSky_anio,skies,botas){
    Aficion.Esquiador.call(this,nombre, epoca, individual, diasSky_anio);

    this.skies=skies || "";
    this.botas=botas || "";

    this.getEquipo=function (){return this.skies +" " +this.botas;};
}

Aficion.Esquiador.Toblerone=function(nombre, epoca, individual, diasSky_anio,tabla,fijaciones,botas){
    Aficion.Esquiador.call(this,nombre, epoca, individual, diasSky_anio);

    this.tabla=tabla || "";
    this.fijaciones=fijaciones || "";
    this.botas=botas || "";

    this.getEquipo=function (){return this.tabla +" " + this.fijaciones+" "+this.botas;};
}