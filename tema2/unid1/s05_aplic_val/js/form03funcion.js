function fnGenerarTabla(res,num,nom,ape,tur)
{
    document.write(`
        <table>
            <tr>
                <th class="titulo" colspan="4" >Datos Personales ${res}</th>
            </tr>
            <tr>
                <td rowspan="3"><img src="img/f${num}.jpg" alt=""></td>
                <td id="tdIzq" >Nombres: </td>
                <td id="tdDer" >${nom}</td>
            </tr>
            <tr>
                <td id="tdIzq" >Apellidos: </td>
                <td id="tdDer" >${ape}</td>
            </tr>
            <tr>
                <td id="tdIzq" >Turno: </td>
                <td id="tdDer" >${tur}</td>
            </tr>
        </table> 
        <br>
    `);
}

function fnTurno(turno)
{
    switch(turno){
        case 'M': return "Dia"; break;
        case 'N': return "Noche"; break;
        default: return "???"; break; 
    }
}