function fnValidar01(){

    let numero = document.getElementById("threeNum").value;
    if (/^\d{3}$/.test(numero)) {
        return true;
        
    } else {
        alert("Ingrese 3 Números");
        return false;
    }
}