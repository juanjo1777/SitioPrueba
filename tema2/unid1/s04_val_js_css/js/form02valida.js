const fnValidar02 = () => {

	let Pref = document.getElementById("xPreferencia").value;
    if( Pref == "" || /^\s+$/.test(Pref)){
        alert("Seleccione una Preferencia ...");
        return false;
    }

    let Mes = document.getElementById("xMes").value;
    if( Mes == "" ){
        alert("Seleccione un Mes");
        return false;
    }

    return true;

}