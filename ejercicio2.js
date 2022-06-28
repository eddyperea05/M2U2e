(function ejercicio2() {
	var i, j;
	var num = new Number();
	var mayo = new Number();
	var meno = new Number();
	var aux = new Number();
	var num = new Array(4);
	for (i=1;i<=4;i++) {
		aux = 0;
		document.write("Ingresar numero ",i,'<BR/>');
		num[i-1] = Number(prompt());
		if (i>1) {
			for (j=1;j<=i-1;j++) {
				if (num[j-1]==num[i-1]) {
					aux = 1;
				}
			}
		}
		if (aux>0) {
			document.write("Se ha encontrado un numero repetido",'<BR/>');
			i = i-1;
		}
		aux = 0;
	}
	meno = num[0];
	mayo = num[0];
	for (i=1;i<=4;i++) {
		if (mayo<num[i-1]) {
			mayo = num[i-1];
		}
		if (meno>num[i-1]) {
			meno = num[i-1];
		}
	}
	document.write(mayo,'<BR/>');
	document.write(meno,'<BR/>');
})()

