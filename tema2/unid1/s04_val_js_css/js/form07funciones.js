const pasarTexto = () => {
	let xValor = document.getElementById("texto1").value;
    document.getElementById("texto2").value = xValor;
}

const fnConcatenar = () => {
	let xTexto1 = document.getElementById("texto1").value;
    let xTexto3 = document.getElementById("texto3").value;
    document.getElementById("texto4").value = xTexto1 + " / " + xTexto3;
}
