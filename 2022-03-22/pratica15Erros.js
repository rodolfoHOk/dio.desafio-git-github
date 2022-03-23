function validaArray(array, num) {
  if (!array || !num)
    throw new ReferenceError("Os parâmetros são obrigatórios");

  if (typeof array !== "object")
    throw new TypeError("Array não é do tipo Object");

  if (typeof num !== "number")
    throw new TypeError("Parâmetro num não é do tipo number");

  if (array.length !== num)
    throw new RangeError("Tamanho do array não corresponde ao num enviado");

  return array;
}

function imprimeArray(array, num) {
  try {
    validaArray(array, num);
    console.log(array);
  } catch (e) {
    if (e instanceof ReferenceError) {
      console.log("Esse erro é um ReferenceError");
      console.log(e.message);
    } else if (e instanceof TypeError) {
      console.log("Esse erro é um TypeError");
      console.log(e.message);
    } else if (e instanceof RangeError) {
      console.log("Esse erro é um RangeError");
      console.log(e.message);
    } else {
      console.log("Tipo de erro não esperado:", e);
    }
  }
}

imprimeArray();

imprimeArray(["a", "b", "c", "d"]);

imprimeArray(null, 0);

imprimeArray(2, 1);

imprimeArray(["a", "b", "c", "d"], "a");

imprimeArray(["a", "b", "c", "d"], 3);

imprimeArray(["a", "b", "c", "d"], 4);
