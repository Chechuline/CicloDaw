function ejercicio5(){
	var fechas=new Array(new Date(),new Date());
	var resultado=new Array();
	var divido;
	var meses=0;
	var anios=0;
	var milis=new Date();

	try{
		for (var i=0;i<2;i++){
			input=window.prompt("Inserta fecha DD/MM/YYYY");
			divido=input.split("/");

			if(divido.length < 3 ||  isNaN(parseInt(divido[0])) || isNaN(parseInt(divido[1])) || isNaN(parseInt(divido[2])) || parseInt(divido[2]) < 100 ||  parseInt(divido[1]) > 12 ||
			  parseInt(divido[0]) > 31 ){
				throw ("Formato incorrecto");
			}

			fec=new Date();
			fec.setDate(divido[0]);
			fec.setMonth(divido[1]);
			fec.setYear(divido[2]);
			fechas[i]=fec;
		}
		milis=Math.abs(fechas[0]-fechas[1]);
		
		if(milis>1000){
			segundos=parseInt(milis/1000);
			milis=milis%1000;
			if(segundos>=60){
				minutos=parseInt(segundos/60);
				segundos=segundos%60;
				if(minutos>=60){
					horas=parseInt(minutos/60)
					minutos=minutos%60
					if(horas>=24){
						dias=parseInt(horas/24);
						horas=horas%24;
						if(dias > 30){
							meses=parseInt(dias/30);
							dias= dias%30;
							if(meses > 12){
								anios = parseInt(meses / 12);
								meses = meses%12;
							}
						}
					}
				}
			}
		}

		resultado["anio"]=anios
		resultado["meses"]=meses;
		resultado["dias"]=dias;
		resultado["horas"]=horas;
		resultado["minutos"]=minutos;
		resultado["segundos"]=segundos;

		mostrarResultado(resultado);

	}catch(error){
		mostrarResultado(error,true);
	}
}
