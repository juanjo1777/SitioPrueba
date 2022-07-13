const fnValidar03 = () => {

	let elementoPref = document.getElementsByName("checkPref");
	let valorElegidoPreferencia = "";
	let eligioPreferencia = false;

	for (let i = 0; i < elementoPref.length; i++) {
		if(elementoPref[i].checked){
			valorElegidoPreferencia = elementoPref[i].value;
			eligioPreferencia = true;
		}
	}

	if (!eligioPreferencia){
		alert("Elija una Preferencia...");
		return false;
	}else{
		alert("Su preferencia elegida es " + valorElegidoPreferencia);
	}

	let elementoEstado = document.getElementsByName("radEstado");
	let valorElegidoEstado = "";
	let eligioEstado = false;

	for (let j = 0; j< elementoEstado.length; j++) {
		if(elementoEstado[j].checked){
			valorElegidoEstado = elementoEstado[j].value;
			eligioEstado = true;
		}
	}

	if (!eligioEstado){
		alert("Elija un Estado Civil...");
		return false;
	}else{
		alert("Su Estado Civil es " + valorElegidoEstado);
	}
	
	return true;
}