function fnGenerarTabla(res,num,nomApe,tur,gen)
{
	document.write("Tabla...");

}

function fnTurno(turno)
{

}

function fnGenero(genero)
{

}

const bucleTabla = (cantidad) => {

	for(var f = 0; f < cantidad; f++){
		document.write("<table border = '1'>");
			document.write("<tr><th colspan = '5'>Datos</th></tr>");
			document.write("<tr><td>#</td><td>Nombres</td><td>Apellidos</td><td>Turno</td><td>Genero</td></tr>");
			document.write("<tr>");
				for(var c = 0; c < 5; c++){
					document.write("<td>"+alunmos[f][c]+"</td>");
				}
				document.write("</tr>");
		document.write("</table> <br>");
	}

}