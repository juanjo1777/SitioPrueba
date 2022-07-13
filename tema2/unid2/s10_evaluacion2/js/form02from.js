function verTablaT(turnoElegido, mtzAlumnos)
{
    let generoElegido = document.getElementById('lstGenero').value;
    orden = 0;

    t01 = "<table border='1'>";
    t01 += "<tr><td class='titulo' colspan='4'>Datos Personales</td></tr>";
    t01 += "<tr><th>No.</th><th>Turno</th><th>Apellidos y Nombres</th><th>Genero</th></tr>";
    if(mtzAlumnos.length > 0){
        for(var i = 0; i < mtzAlumnos.length; i++){
            turnoMtz = mtzAlumnos[i][3];
            generoMtz = mtzAlumnos[i][4];

            if(turnoMtz == turnoElegido && generoMtz == generoElegido){
                orden++;
                apeNom = mtzAlumnos[i][2] + "," + mtzAlumnos[i][1];
                turno = fnTurno( mtzAlumnos[i][3]);
                genero = fnGenero(mtzAlumnos[i][4]);

                t01 += "<tr>";
                t01 += "<td>"+orden+"</td><td>"+turno+"</td><td>"+apeNom+"</td><td>"+genero+"</td>";
                t01 += "</tr>";
            }

        }
    }
    t01 += "</table>";

    document.getElementById("marco").innerHTML = t01;
}

function verTablaG(generoElegido, mtzAlumnos)
{
    let turnoElegido = document.getElementById('lstTurno').value;
    orden = 0;

    t01 = "<table border='1'>";
    t01 += "<tr><td class='titulo' colspan='4'>Datos Personales</td></tr>";
    t01 += "<tr><th>No.</th><th>Turno</th><th>Apellidos y Nombres</th><th>Genero</th></tr>";
    if(mtzAlumnos.length > 0){
        for(var i = 0; i < mtzAlumnos.length; i++){
            turnoMtz = mtzAlumnos[i][3];
            generoMtz = mtzAlumnos[i][4];

            if(turnoMtz == turnoElegido && generoMtz == generoElegido){
                orden++;
                apeNom = mtzAlumnos[i][2] + "," + mtzAlumnos[i][1];
                turno = fnTurno( mtzAlumnos[i][3]);
                genero = fnGenero(mtzAlumnos[i][4]);

                t01 += "<tr>";
                t01 += "<td>"+orden+"</td><td>"+turno+"</td><td>"+apeNom+"</td><td>"+genero+"</td>";
                t01 += "</tr>";
            }

        }
    }
    t01 += "</table>";

    document.getElementById("marco").innerHTML = t01;
}

function fnTurno(xTurno){
	switch(xTurno){
        case 'M': return "Dia"; break;
        case 'N': return "Noche"; break;
        default: return "???"; break;
    }
}
 
function fnGenero(xGenero){
	switch(xGenero){
        case 'M': return "Masculino"; break;
        case 'F': return "Femenino"; break;
        default: return "???"; break;
    }
}

function borrarTabla(){
	document.getElementById("marco").innerHTML = "Borrado";
}