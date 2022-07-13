const fnValidar05 = () => {
    let xTexto = document.getElementById("txtTexto").value;
    if(!(/^\d{3}\s\d{3}\s\d{3}$/.test(xTexto))){
        alert("Escriba 9 numeros entre 3 y separados por un espacio ...");
        return false;
    }

    let xNumero = document.getElementById("txtNumero").value;
    if(!(/^\d{9}$/.test(xNumero))){
        alert("Faltan Numeros ...");
        return false;
    }

    let xFijo = document.getElementById("txtFijo").value;
    if(!(/^05[45]\s\d{6}$/.test(xFijo))){
        alert("Numero Fijo no Valido ...");
        return false;
    }

    return true;
}