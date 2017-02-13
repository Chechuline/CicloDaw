var Figuritas=Figuritas || {};

Figuritas.Base=class{
    constructor(numLados,posX,posY){
        this.numLados=numLados || 0;
        this.posX=posX || 0;
        this.posY = posY || 0;
    }
    getnumLados(){return this.numLados};
}

Figuritas.Circulo=class extends Figuritas.Base{
    constructor(numLados,posX,posY,radio){
        
        super(numLados,posX,posY);

        this.radio=radio || 0;
    }
}

Figuritas.Linea=class extends Figuritas.Base{
    constructor(numLados,posX,posY,longitud){
        super(numLados,posX,posY);

        this.longitud=longitud || 0;
    }
}


Figuritas.Triangulo=class extends Figuritas.Base{
    constructor(numLados,posX,posY,lado){
        super(numLados,posX,posY);

        this.lado=lado || 0;
    }
}

Figuritas.Cuadrado = class extends Figuritas.Base{
    constructor(numLados,posX,posY,lado){
        super(numLados,posX,posY);

        this.lado=lado || 0;
    }
}

