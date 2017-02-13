
function ejercicio6(){
	var fec=new Date();
	var dia= fec.getUTCDay();
	var resultado=new Array();
	switch(dia){
		case 0: resultado["Dia"]="Domingo";break;
		case 1: resultado["Dia"]="Lunes";break;
		case 2: resultado["Dia"]="Martes";break;
		case 3: resultado["Dia"]="Miercoles";break;
		case 4: resultado["Dia"]="Jueves";break;
		case 5: resultado["Dia"]="Viernes";break;
		case 6: resultado["Dia"]="Sabado";break;
	}
	mostrarResultado(resultado);

}