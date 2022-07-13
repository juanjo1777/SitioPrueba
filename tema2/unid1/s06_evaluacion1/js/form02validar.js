const fnValidar02 = () => {

	//validacion texto

	let texto = document.getElementById("txtTexto").value;    
    if(texto=="" || /^\s+$/.test(texto)){
        alert("Escriba TEXTO...");
        return false;
    }
	
	//validacion radiobutton

	let genero = document.getElementsByName("radio1");
	let generoElegido="";
	let eligioGenero=false;
	let eligio=false;
    for(let i=0; i<genero.length;i++) {
		if(genero[i].checked) {
			generoElegido=genero[i].value;
			eligioGenero=true;
		}
	}

	if(!eligioGenero){
		alert("Coloque su Genero")
		return false;
    }

	//validacion checkbox

	let eleccion = document.getElementsByName("cBox");
	let valor1="";
	let valor2="";
	let cont =0 ;
	for(let i=0; i<eleccion.length;i++) {
		if(eleccion[i].checked) {
			cont=cont+1;
			if(cont==1){
				valor1=eleccion[i].value;
			}
			if(cont==2){
				valor2=eleccion[i].value;
			}
		}
	}

	if(cont==2){ 
		eligio=true; 
	}

	if(!eligio){
		alert("Solo esta permitido 2 opciones, no " +cont+ "");
		return false;
	}else{
		alert("Sus dos preferencias elegidas son: " + valor1 +" y "+ valor2);
	}

	return true;
}