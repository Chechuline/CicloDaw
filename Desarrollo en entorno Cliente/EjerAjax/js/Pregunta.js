//Clase pregunta
function Pregunta(enunciado,valor){
   //atributos privados
    var valor=valor;
    var enunciado=enunciado;
    
    //metodos publicos
    this.getValor=()=>{
        return valor || 0;
    }
    this.setValor=(val)=>{
        valor=val;
    }
    this.getEnunciado=()=>{
        return enunciado || "";
    }
    this.setEnunciado=(enun)=>{
        enunciado=enun;
    }
};

//Clase Desarrollar
function Desarrollar(){
    //Atributos publicos
    this.respuestaPropuesta='';

    //metodos publicos
    this.setRespuesta=(respuesta)=>{
        this.respuestaPropuesta=respuesta;
    };
    this.getRespuesta=()=>{
        return this.respuestaPropuesta;   
    };

}