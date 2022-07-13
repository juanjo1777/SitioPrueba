const fnValidar06 = () => {
    
    let xCorreo = document.getElementById("txtCorreo").value;
    if(!(/\w{1,}[@][\w\-]{1,}([.]([\w\-]{1,})){1,3}$/.test(xCorreo))){
        alert("Escribe un correo valido ...");
        return false;
    }

    return true;
}