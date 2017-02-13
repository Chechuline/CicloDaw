function ejercicio2(){
	var solucion=document.getElementById("soluciones");
	var bienvenido=document.createTextNode("Bienvenido");

	solucion.appendChild(bienvenido);
}
function ejercicio3(){
	var padre = document.getElementById("ejer2");
	
	for(var i=0;i<4;i++){
		div=document.createElement("div");
		div.style.backgroundColor='#'+Math.random().toString(16).substr(-6);
		div.style.width="30px";
		div.style.height="30px";
		div.style.border="1px solid black";
		div.addEventListener("mouseover",function(){
			 document.getElementsByTagName("body")[0].style.backgroundColor=this.style.backgroundColor;
		});
		padre.appendChild(div);
	}
	div=document.createElement("div");
		div.style.backgroundColor="white";
		div.style.width="30px";
		div.style.height="30px";
		div.style.border="1px solid black";
		div.addEventListener("mouseover",function(){
			 document.getElementsByTagName("body")[0].style.backgroundColor=this.style.backgroundColor;
		});
		padre.appendChild(div);
}
function ejercicio5(){
	var imag=document.getElementById("imagen");
	imag.addEventListener("mouseover", function(){
		this.setAttribute("src","./img/img2.jpg");
	});
	imag.addEventListener("mouseout", function(){
		this.setAttribute("src","./img/img1.png");
	});
}

function ejercicio6(){
	var btn=document.getElementById("Ejer5");
	var lbl=document.getElementById("resultadoDado");

	btn.addEventListener("click",function(){
		var idtime=window.setInterval(function(){
			lbl.innerHTML=parseInt(Math.random()*10);			
											},10);
		window.setTimeout(function(){
			window.clearInterval(idtime);
		},1000);
	});

}
function ejercicio7(){
	var btn=document.getElementById('Ejer7');
	btn.addEventListener("click",function(){
		var distX=document.getElementById("NwWinX").value;
		var distY=document.getElementById("NwWinY").value;
		var alt=document.getElementById("NwWinH").value;
		var anch=document.getElementById("NwWinH").value;

		window.open("http://google.es","","left="+distX+",top="+distY+",height="+anch+",width="+alt);
	})
	

}

//MAIN
window.onload = function(){
	ejercicio2();
	ejercicio3();
	ejercicio5();
	ejercicio6();
	ejercicio7();

}
/* ejercicio 1 al cerrar
window.onbeforeunload  = function(){
		return "Estas cerrando la ventana. ¿Estas seguro?";
}*/
window.onmousemove=function(e){
	/*Ejercicio 3*/
	var x=document.getElementById("coorX");
	var y=document.getElementById("coorY");

	//x.innerHTML=window.onmousemove.arguments[0].clientX;
	//y.innerHTML=window.onmousemove.arguments[0].clientY;
	x.innerHTML=e.clientX;
	y.innerHTML=e.clientY;
};