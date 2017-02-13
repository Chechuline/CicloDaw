/*
http://stackoverflow.com/questions/3248384/document-createelementscript-synchronously
*/
function mostrarResultado(resultado,error=false){
	
		var contenido='';
		var fin=document.getElementById('resultado');
		while(fin.firstChild){
			fin.removeChild(fin.firstChild);
		}

	if(!error){
		fin.style.color="Black";
		fin.appendChild(document.createElement("h3").appendChild(document.createTextNode("Resultado:")));

		// contenido='<h3>Resultado:</h3>';

		// resultado.forEach(function(){
		// 	// salida+=index + " -> " +currentValue;
		// 	console.log("gg");
		// });
		for(var index in resultado){
			contenido+= " " +index + " -> " + resultado[index]+"\n";
		}

		
	}else{
		fin.style.color="Red";
		contenido+="Error: "+resultado;
	}
	var salida=document.createTextNode(contenido);
	fin.appendChild(salida);
}



window.onload = function(){
	document.getElementById('resultado').innerHTML='';
	
	var btn1=document.getElementById('ejer1');
	btn1.addEventListener("click",function(){
		var head=document.getElementsByTagName('head')[0];
		var scrip=document.createElement('script');
		scrip.type='text/javascript';
		scrip.src='./js/ejer1.js';
		head.appendChild(scrip);
	
		scrip.onload=function(){ejercicio1()};
	});
	var btn2=document.getElementById('ejer2');
	btn2.addEventListener("click",function(){
		var head=document.getElementsByTagName('head')[0];
		var scrip=document.createElement('script');
		scrip.type='text/javascript';
		scrip.src='./js/ejer2.js';
		head.appendChild(scrip);
	
		scrip.onload=function(){ejercicio2()};
	});
	var btn3=document.getElementById('ejer3');
	btn3.addEventListener("click",function(){
		var head=document.getElementsByTagName('head')[0];
		var scrip=document.createElement('script');
		scrip.type='text/javascript';
		scrip.src='./js/ejer3.js';
		head.appendChild(scrip);
	
		scrip.onload=function(){ejercicio3()};
	});
	var btn4=document.getElementById('ejer4');
	btn4.addEventListener("click",function(){
		var head=document.getElementsByTagName('head')[0];
		var scrip=document.createElement('script');
		scrip.type='text/javascript';
		scrip.src='./js/ejer4.js';
		head.appendChild(scrip);
	
		scrip.onload=function(){ejercicio4()};
	});
	var btn5=document.getElementById('ejer5');
	btn5.addEventListener("click",function(){
		var head=document.getElementsByTagName('head')[0];
		var scrip=document.createElement('script');
		scrip.type='text/javascript';
		scrip.src='./js/ejer5.js';
		head.appendChild(scrip);
	
		scrip.onload=function(){ejercicio5()};
	});

	var btn6=document.getElementById('ejer6');
	btn6.addEventListener("click",function(){
		var head=document.getElementsByTagName('head')[0];
		var scrip=document.createElement('script');
		scrip.type='text/javascript';
		scrip.src='./js/ejer6.js';
		head.appendChild(scrip);
	
		scrip.onload=function(){ejercicio6()};
	});

	var btn7=document.getElementById('ejer7');
	btn7.addEventListener("click",function(){
		var head=document.getElementsByTagName('head')[0];
		var scrip=document.createElement('script');
		scrip.type='text/javascript';
		scrip.src='./js/ejer7.js';
		head.appendChild(scrip);
	
		scrip.onload=function(){ejercicio7()};
	});

	var btn8=document.getElementById('ejer8');
	btn8.addEventListener("click",function(){
		var head=document.getElementsByTagName('head')[0];
		var scrip=document.createElement('script');
		scrip.type='text/javascript';
		scrip.src='./js/ejer8.js';
		head.appendChild(scrip);
	
		scrip.onload=function(){ejercicio8()};
	});

	var btn9=document.getElementById('ejer9');
	btn9.addEventListener("click",function(){
		var head=document.getElementsByTagName('head')[0];
		var scrip=document.createElement('script');
		scrip.type='text/javascript';
		scrip.src='./js/ejer9.js';
		head.appendChild(scrip);
	
		scrip.onload=function(){ejercicio9()};
	});


	var btn10=document.getElementById('ejer10');
	btn10.addEventListener("click",function(){
		var head=document.getElementsByTagName('head')[0];
		var scrip=document.createElement('script');
		scrip.type='text/javascript';
		scrip.src='./js/ejer10.js';
		head.appendChild(scrip);
	
		scrip.onload=function(){ejercicio10()};
	});


}
