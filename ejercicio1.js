(function ejercicio1() {
	let i;
	let nomest = new String();
	let cantmaterias = new Number();
	var materias = new Number();
	let costofijo = new Number();
	let carnet = new Number();
	let valortotalmaterias = new Number();
	costofijo = 20000;
	carnet = 8000;
	valortotalmaterias = 0;
	document.write("Por favor ingrese el nombre del estudiante",'<BR/>');
	nomest = prompt();
	do {
		document.write("Por favor ingrese el numero de materias",'<BR/>');
		cantmaterias = Number(prompt());
		if (cantmaterias<=0) {
			document.write("Por favor poner un numero de materias que sea 1 o mayor",'<BR/>');
		}
	} while (cantmaterias<=0);
	var materias = new Array(cantmaterias);
	for (i=1;i<=cantmaterias;i++) {
		do {
			document.write("Por favor ingrese el valor de la materia ",i,'<BR/>');
			materias[i-1] = Number(prompt());
			if (materias[i-1]<=0) {
				document.write("Por favor ingresar un valor positivo",'<BR/>');
			}
		} while (materias[i-1]<=0);
		valortotalmaterias = valortotalmaterias+materias[i-1];
	}
	valortotalmaterias = (valortotalmaterias*0.8)+costofijo+carnet;
	document.write("El valor de la matricula del estudiante ",nomest," es $",valortotalmaterias,'<BR/>');
})()

