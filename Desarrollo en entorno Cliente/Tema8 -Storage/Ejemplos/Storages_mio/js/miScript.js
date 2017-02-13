//guardar en localStorage o session Storage
//almacen: 0-> localStorage o 1=sesionStorage
function escribirStorage(dato,almacen){
    if(almacen==0){
        window.localStorage.setItem(dato.id,dato.value);
    }else{
        window.sessionStorage.setItem(dato.id,dato.value);
    }

}

function recogerDatos(){
    let inputs=document.getElementsByTagName('input');
    for(var i=0;i<inputs.length;i++){
        escribirStorage(inputs[i],0);
        escribirStorage(inputs[i],1);
    }

}
function asignarEventos(){
    let inputs=document.getElementsByTagName('input');
    for(var i=0;i<inputs.length;i++){
        inputs[i].addEventListener("blur",recogerDatos);
    }
}

window.onload=function(){
    asignarEventos();

}