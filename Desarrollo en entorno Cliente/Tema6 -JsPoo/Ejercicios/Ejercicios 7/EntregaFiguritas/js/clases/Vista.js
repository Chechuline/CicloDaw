var Vista=Vista || {};

Vista.Base=function(lienzo,figura,posX,posY){
    //public vars
    this.lienzo=lienzo;
    //private vars
    var figura=figura || "";
    var posX=posX||0;
    var posY=posY||0;
    //public Method
    this.pintar=function(figura,posX,posY){
        switch(figura.numLados){//figura.getNumLados no funca
            case "0":var item=pintarCirculo(figura.radio,figura.posX,figura.posY);
                break;
            case "1":var item=pintarLinea(figura.longitud,figura.posX,figura.posY);
                break;
            case "2":var item=pintarTriangulo(figura.lado,figura.posX,figura.posY);
                break;
            case "3":var item=pintarCuadrado(figura.lado,figura.posX,figura.posY);
                break;
        }
        this.lienzo.appendChild(item);
    };
    //private methods
    pintarCirculo=function(radio,posX,posY){
        var circulo=document.createElement('div');
        circulo.setAttribute("style","width:"+radio+"px;height:"+radio+"px;background-color:yellow;border-radius:50%;position:absolute;top:"+posX+"px;left:"+posY+"px;");
        return circulo;

    }
    pintarLinea=function(longitud,posX,posY){
        var linea=document.createElement('div');
        linea.setAttribute("style","width:"+longitud+"px;height:5px;background-color:purple;position:absolute;top:"+posX+"px;left:"+posY+"px;");
        return linea;
    }
    pintarTriangulo=function(longitud,posX,posY){
        var triangulo=document.createElement('div');
        triangulo.setAttribute("style","width:0px;height:0px;border-left:"+longitud+"px solid transparent;border-right:"+longitud+"px solid transparent;border-bottom:"+longitud+"px solid green;position:absolute;top:"+posX+"px;left:"+posY+"px;");
        return triangulo;

    }
    pintarCuadrado=function(longitud,posX,posY){
        var cuadrado=document.createElement('div');
        cuadrado.setAttribute("style","width:"+longitud+"px;height:"+longitud+"px;background-color:red;position:absolute;top:"+posX+"px;left:"+posY+"px;");
        return cuadrado;

    }
}
