// solucao 1 - Única palavra
function verificaPalindromo(string) {
	string = string.trim();

	if (!string) return "informe uma palavra (string não vazia)";

	return string.split("").reverse().join("") === string
}

// solucao 2
function verificaPalindromo2(string) {
	string = string.trim();
	
	if (!string) return "informe uma frase (string não vazia)";

	string = string.split(" ").join("");

	for (let i = 0; i < string.length / 2; i++) {
		if (string[i] !== string[string.length - 1 - i]) {
			return false;
		}
	}

	return true;
}

console.log(verificaPalindromo2("roma me tem amor"));
