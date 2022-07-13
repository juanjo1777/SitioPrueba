function fnValidar05()
{
	let turn = document.getElementById("lstTurno").value;
    if(turn == ""){
        alert("Escoja un Turno");
        return false;
    }
}

function verConteo(turno, mtzAlumnos)
{
	contadorTurno = 0;
    if(mtzAlumnos.length > 0){
        mtzAlumnos.forEach(element => {
            if(element[3] == turno){
                contadorTurno++;
            }
        });
    }
    document.getElementById("txtResult").value = contadorTurno;
}