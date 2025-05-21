function leer(){
	//Referecia por pseudoclase
	var nom=document.forms["formulario"].elements[0].value;
	//Referecia por Id
	var clave=document.getElementById("pass").value;
	//Referecia por TagName
	var car=document.getElementsByTagName("select")[0].value;
	//Referecia por Name
	var gen=document.getElementsByName("genero");
	for(i=0;i<gen.length;i++){
		if(gen[i].checked)
			var g=gen[i].value;
	}
	var ok=document.getElementById("check").checked;
	document.getElementById("resultado").innerHTML=
	"<br>Tu nombre: "+nom+
	"<br>Tu contraseña: "+clave+
	"<br>Tu carrera: "+car+
	"<br>Tu genero: "+g+
	"<br>Aceptado: "+ok;
}