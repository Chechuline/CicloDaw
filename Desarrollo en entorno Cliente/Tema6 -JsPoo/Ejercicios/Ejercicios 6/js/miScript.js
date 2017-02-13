var datos=new Array();

function funcionalidad(){
    //cargo click a imagen <-
    document.getElementsByTagName('img')[0].addEventListener('click',function(){
        anterior();
    });
    //cargo click a imagen -> 
    document.getElementsByTagName('img')[1].addEventListener('click',function(){
       siguiente();
    });
    //cargo evento change a todos los inputs
    var inputs=document.getElementsByTagName('input')
    for(var i in inputs){
        if(!isNaN(i)){
            inputs[i].addEventListener('change',function() {
                modificar(this);
            });
        }
    }
}
function modificar(elem){

    datos[elem.name]=elem.value;
}
function siguiente(){
    if(document.getElementsByClassName('container')[0].classList.contains('visible')){
       document.getElementsByClassName('container')[0].setAttribute('class','container hidden');
       document.getElementsByClassName('container')[1].setAttribute('class','container visible');

       document.getElementsByTagName('img')[0].setAttribute('class','visible');
    }else{
        document.getElementsByClassName('container')[1].setAttribute('class','container hidden');
        document.getElementsByClassName('container')[2].setAttribute('class','container visible');

        document.getElementsByTagName('img')[1].setAttribute('class','hidden');
    }
    
}
function anterior(){
    if(document.getElementsByClassName('container')[1].classList.contains('visible')){
       document.getElementsByClassName('container')[0].setAttribute('class','container visible');
       document.getElementsByClassName('container')[1].setAttribute('class','container hidden');
       
       document.getElementsByTagName('img')[0].setAttribute('class','hidden');
    }else{
        document.getElementsByClassName('container')[1].setAttribute('class','container visible');
        document.getElementsByClassName('container')[2].setAttribute('class','container hidden');

        document.getElementsByTagName('img')[1].setAttribute('class','visible');
    }
}
function incial(){
   for(var i=0;i<document.getElementsByClassName('container').length-1;i++){
       if(document.getElementsByClassName('container')[i]!=undefined){
           clase=document.getElementsByClassName('container')[i].classList;
            (i!=0)?document.getElementsByClassName('container')[i].setAttribute('class',clase +' hidden'):document.getElementsByClassName('container')[i].setAttribute('class',clase +' visible');
       }
       document.getElementsByTagName('img')[0].setAttribute('class','hidden');
    }

}


window.onload=function(){
    
    funcionalidad();
    incial();
}

