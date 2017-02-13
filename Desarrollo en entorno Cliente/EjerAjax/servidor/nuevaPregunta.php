<?php
//comprobamos si el fichero del examen existe.
//Si no existe, lo creamos.
if (file_exists("../datos/examen_" . $_POST["nombre"] .".xml") == false){	
	$xml = new SimpleXMLElement('<xml/>');
	$examen = $xml->addChild('examen');
	$examen->addChild('nombre',$_POST["nombre"]);
	$examen->addChild('fecha',$_POST["fecha"]);
	$preguntas = $examen->addChild('preguntas');
	Header('Content-type: text/xml');
}
 else{	//si el fichero existe, lo cargamos 
 	$xml = simplexml_load_file("../datos/examen_" . $_POST["nombre"] .".xml");
 	$preguntas = $xml->examen->preguntas;
}

//aniadimos la pregunta que nos ha llegado
$nuevaPregunta = $preguntas->addChild('pregunta');

//vas agregando todos los atributos y sus valores
$nuevaPregunta->addChild('enunciado', $_POST["enunciado"]);
$nuevaPregunta->addChild('valor', $_POST["valor"]);
$nuevaPregunta->addChild('respuestaPropuesta', $_POST["respuestaPropuesta"]);

// //Guardamos el fichero
	$xml->asXML("../datos/examen_" . $_POST["nombre"] .".xml");

//devolvimos al que hizo la peticion un true indicando que todo ha ido bien.
echo "true";
?>