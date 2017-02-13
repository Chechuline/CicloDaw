<?php
$flag=false;
$usuario=(isset($_REQUEST['usuario']))?$_REQUEST['usuario']:'al';
$pass=(isset($_REQUEST['pass']))?$_REQUEST['pass']:'al';
function comprobar($usuario,$pass){
    $conn=new mysqli('localhost','admin','admin','ejercicios8');
    $prepara=$conn->prepare('select * from usuarios where usuarioId= ?');
    $prepara->bind_param('s',$usuario);
    $prepara->execute();
    $prepara->bind_result($idUsuario,$passwd,$email);


    while ($prepara->fetch()){
        if($passwd==$pass){
            $flag=true;
        }
    }
    return $flag;
}
if(comprobar($usuario,$pass)){
    echo("Bienvenido ".$usuario);
}else{
    echo("Usuario o contraseña incorrecta");
}
?>