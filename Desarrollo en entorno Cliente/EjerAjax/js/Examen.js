function Examen(nombre,fecha){

    this.nombre=nombre;
    this.fecha=fecha;
    preguntas=Array();

    this.getPreguntas=()=>{
        return preguntas;
    }
    this.setPregunta=(pregunta)=>{
        preguntas.push(pregunta);
    }
}