function comparaValores(n1, n2) {
	if (!numerosValidos(n1, n2)) {
		return "Entre com dois números";
	}

	const primeiraParte = comparaIgualdadeEMontaAPrimeiraParte(n1, n2);
	const {soma, segundaParte} = somaEMontaASegundaParte(n1, n2);
	const terceiraParte = comparaASomaA10EMontaATerceiraParte(soma);
	const quartaParte = comparaASomaA20EMontaAQuartaParte(soma);

  	return `${primeiraParte} ${segundaParte}${terceiraParte}${quartaParte}`;
}

function numerosValidos(n1, n2) {
	if (n1 === undefined || n1 === null || n2 === undefined || n2 === null) {
		return false;
	}
	if (typeof n1 !== "number") {
		return false;
	}
	if (typeof n2 !== "number") {
		return false;
	}
	return true;
}

function comparaIgualdadeEMontaAPrimeiraParte(n1, n2) {
	const resultadoComparacao = n1 === n2 ? 'são iguais' : 'não são iguais';
	return `Os números ${n1} e ${n2} ${resultadoComparacao}.`;
}

function somaEMontaASegundaParte(n1, n2) {
	const soma = n1 + n2;
	return {
		soma,
		segundaParte: `Sua soma é ${soma}, `
	};
}

function comparaASomaA10EMontaATerceiraParte(num) {
	const resultado = num < 10 ? 'menor que' : num > 10 ? 'maior que' : 'igual a';
	return `que é ${resultado} 10 `;
}

function comparaASomaA20EMontaAQuartaParte(num) {
	const resultado = num < 20 ? 'menor que' : num > 20 ? 'maior que' : 'igual a';
	return `e ${resultado} 20.`;
}

console.log(comparaValores(8, 12));
