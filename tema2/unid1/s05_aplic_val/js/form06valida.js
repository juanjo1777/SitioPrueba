function fnValidar06()
{
    let gen = document.getElementById("lstGenero").value;
    if(gen == ""){
        alert("Escoja un Genero");
        return false;
    }
}

function conteoGen(turno, mtzAlumnos)
{
	contadorTurno = 0;
    if(mtzAlumnos.length > 0){
        mtzAlumnos.forEach(element => {
            if(element[4] == turno){
                contadorTurno++;
            }
        });
    }
    document.getElementById("txtResult").value = contadorTurno;
}
