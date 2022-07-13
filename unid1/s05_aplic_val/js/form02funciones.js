function fnValidar02(){
    //validacion de nombre
    let name = document.getElementById("txtNombres").value;
    if (name == "" ) {
        alert ("Escriba su nombre");
        return false;
    }

    //validacion de apellido
    let lastName = document.getElementById("txtApellidos").value;
    if (lastName == "" ) {
        alert ("Escriba su apellido");
        return false;
    }

    //validacion de dirrecion
    let home = document.getElementById("txtDireccion").value;
    if (home == "" ) {
        alert ("Escriba su dirección");
        return false;
    }

    //validacion de edad
    let age = document.getElementById("txtEdad").value;
    if (age == "" ) {
        alert ("Escriba su edad");
        return false;
    }

    //validacion de fecha de nacimiento
    let date = document.getElementById("fecNac").value;
    if (date == "" ) {
        alert ("Escriba su Fecha de nacimiento");
        return false;
    }

    //validacion de genero
    let genero = document.getElementsByName("rdGenero");
    let seleccionado = false;
    for( var i = 0; i < genero.length; i++){
        if (genero[i].checked) {
            seleccionado = true;
        }
    }
    if(!seleccionado){
        alert("Elija genero");
        return false;
    }


}