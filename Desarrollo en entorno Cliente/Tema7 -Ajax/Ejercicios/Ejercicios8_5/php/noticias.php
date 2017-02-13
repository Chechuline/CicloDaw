<?php
$metodo=(isset($_POST['accion']))?$_POST['accion']:'GET';
/*------------------------------------------------------------------------
session_start();


$noticias=array(array(  "cabecera"=>"cabecera de noticia1",
                                        "cuerpo"=>"cuerpo de noticia1",
                                        "autor"=>"autor de noticia1"),
                array(  "cabecera"=>"cabecera de noticia2",
                                        "cuerpo"=>"cuerpo de noticia2",
                                        "autor"=>"autor de noticia2"),
                array(  "cabecera"=>"cabecera de noticia3",
                                        "cuerpo"=>"cuerpo de noticia3",
                                        "autor"=>"autor de noticia3"));

(!isset($_SESSION['noticias']))?$_SESSION['noticias']=$noticias:null;
-------------------------------------------------------------------------*/

//Si enviamos noticia
if($metodo=="PUT"){
    /*$la=file_get_contents("php://input");
    
    $datos= explode("&", $la);
    
    $titulo= explode("=",$datos[0])[1];
    $cuerpo=explode("=",$datos[1])[1];
    $autor=explode("=",$datos[2])[1];
    $imagen=explode("=",$datos[3])[1];*/
    
    $titulo=$_POST['titulo'];
    $cuerpo=$_POST['titulo'];
    $autor=$_POST['titulo'];
    $img=$_FILES['img'];
    
    if($titulo!='' && $cuerpo!='' && $autor!=''){
        /*http://www.php-mysql-tutorial.com/wikis/mysql-tutorials/uploading-files-to-mysql-database.aspx */
        /*Inserto datos en la BBDD si los campos estan correctos*/
        $conexion=new mysqli('localhost','admin','admin','ejercicios8');
        if($img!=null){
            $fp= fopen($img['tmp_name'], 'r');

            $contenido= fread($fp, filesize($img['tmp_name']));
            fclose($fp);
            //$contenido= addslashes($contenido);
            
            $query='insert into noticias (Titulo,Descripcion,Autor,img) values (?,?,?,?)';
            $preparada=$conexion->prepare($query);
            $preparada->bind_param("ssss",$titulo, $cuerpo, $autor,$contenido);
        }else{
            $query='insert into noticias (Titulo,Descripcion,Autor) values (?,?,?)';
            $preparada=$conexion->prepare($query);
            $preparada->bind_param("sss",$titulo, $cuerpo, $autor);
        }
        
        // $noticias=$_SESSION['noticias'];
        // $noticias[]=array('cabecera'=>$titulo,'cuerpo'=>$cuerpo,'autor'=>'autor:'.$autor);

        // $_SESSION['noticias']=$noticias;
        if($preparada->execute()){
            print "OK";
        }else{
            print "KO";
        }
    }else{
        print "Error al conectar";
    }
    
}
//si buscamos noticia
if($metodo=='GET'|| $metodo=='POST'){
    
    //$noticias=$_SESSION['noticias'];
    /*Conexion y obtencion de los datos de BBDD*/
    $conexion=new mysqli('localhost','admin','admin','ejercicios8');
    
    $query='select * from noticias where img is not null';
    $preparada=$conexion->prepare($query);
    $preparada->execute();
    $preparada->bind_result($titulo,$descripcion,$autor,$imagen);
    while($preparada->fetch()){
        /***************************/
        /*$fp= fopen('C:\xampp\tmp\php'.$titulo.'.jpg', 'w+');
        fwrite($fp, $imagen);
        fclose($fp);
        $imagen='C:\xampp\tmp\php'.$titulo.'.jpg';*/
         /***************************/
        
        
        $noticia[]=array('cabecera'=>$titulo,'cuerpo'=>$descripcion,'autor'=>'autor:'.$autor,'imagen'=>$imagen); 
    }
    /*foreach($noticia as $key=>$value){
        $fp= fopen('C:\xampp\tmp\php'.$value['cabecera'].'.jpg', 'w+');
        fwrite($fp, $value['imagen']);
        fclose($fp);
        $value=$value;
        $value['imagen']='C:\xampp\tmp\php'.$value['cabecera'].'.jpg';
        
    }*/
   

    //Construccion del XML
    $xml=new SimpleXMLElement('<xml/>');
    $noticiasXml=$xml->addChild('noticias');//añade el root noticias
    
    foreach($noticia as $noticiaNo=> $datosNoticia){
        $noticiaXml=$noticiasXml->addChild('noticia');//añado cada noticia
        foreach($datosNoticia as $tipo=>$contenido){
            if($tipo=='imagen'){
                $tipoNoticiaXml=$noticiaXml->addChild($tipo, base64_encode($contenido));
            }else{
                $tipoNoticiaXml=$noticiaXml->addChild($tipo,$contenido);//añado datos de noticia
            }
        }
    }
    
    Header('Content-type: text/xml');
    print($xml->asXML());
}

?>