function relogio(){


	var data     = new Date();
	var hora     = data.getHours();
	var minuto   = data.getMinutes();
	var segundo  = data.getSeconds();



	if(hora < 10){
		hora = "0"+horas;
	}
	if(minuto < 10){
		hora = "0"+horas;
	}
	if(segundo < 10){
		hora = "0"+horas;
	}


	document.getElementById("relogio").innerHTML = hora+":"+minuto+":"+segundo;



}


window.setInterval("relogio()",1000);