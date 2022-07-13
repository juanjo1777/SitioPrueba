const fnValidar01 = () => {

    //Elementos para validar
    //1) Formulario con elementos que tengan name & id
    //2) Un evento que desencadene una funcion con retorno true o false
    //3) Prueva logica para verificar si se han escrito o no

    let xTexto = document.getElementById("txtTexto").value;
    if(xTexto == "" || /^\s+$/.test(xTexto)){
        alert("Falta TEXTO...");
        return false; 
    }

    let xNumero = document.getElementById("txtNumero").value;
    if(xNumero == "" || /^\s+$/.test(xNumero)){
        alert("Falta Número...");
        return false; 
    }

    return true;
}