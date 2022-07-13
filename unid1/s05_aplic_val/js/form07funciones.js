function verTablas(turnoElegido, mtzAlumnos)
{
    contadorTurno = 0;
    orden = 0;
    res = "";

    t01 = "<table border='1'>";
    t01 += "<tr><td class='titulo' colspan='4'>Datos Personales</td></tr>";
    t01 += "<tr><th>No.</th><th>Apellidos y Nombres</th><th>Genero</th><th>Foto</th></tr>";
    if(mtzAlumnos.length > 0){
        for(var i = 0; i < mtzAlumnos.length; i++){
            turnoMtz = mtzAlumnos[i][3];

            if(turnoMtz == turnoElegido){
                orden++;
                apeNom = mtzAlumnos[i][2] + "," + mtzAlumnos[i][1];
                genero = fnGenero(mtzAlumnos[i][4]);
                foto = alumnos[i][0];

                t01 += "<tr>";
                t01 += "<td>"+orden+"</td><td>"+apeNom+"</td><td>"+genero+"</td><td><img src='img/f"+foto+".jpg'></td>";
                t01 += "</tr>";
            }

        }
    }
    t01 += "</table>";

    /*
	t01 = (`
        <table border="1">
            <tr>
                <td class="titulo" colspan="3">Datos Personales</td>
            </tr>
            <tr>
                <th>No.</th>
                <th>Apellidos y Nombres</th>
                <th>Genero</th>
            </tr>
            <scrip>
                if(mtzAlumnos.length > 0) {
                    document.write()
                }
            </scrip>

            `+
            if( mtzAlumnos.length > 0){
                document.write(`
                    <tr>
                        <td>1</td>
                        <td>Juan</td>
                        <td>M</td>
                    </tr>
                `);
            }
        +`</table>
    `);
    */

    document.getElementById("marco").innerHTML = t01;
}
 
function fnGenero(xGenero){
	switch(xGenero){
        case 'M': return "Masculino"; break;
        case 'F': return "Femenino"; break;
        default: return "???"; break;
    }
}

function borrarMarco(){
	document.getElementById("marco").innerHTML = "Borrado";
}