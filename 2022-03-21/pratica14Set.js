// pratica14Set.js

const nums = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(array) {
	const unicos = new Set(array);

	return [...unicos]; // retorna um array ao invés do set unicos
}

console.log(valoresUnicos(nums));
