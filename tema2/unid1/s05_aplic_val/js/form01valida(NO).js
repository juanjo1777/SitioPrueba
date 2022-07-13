function fnValidar01() {
    let elementoEstado = document.getElementsByName("rdGenero");
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
}