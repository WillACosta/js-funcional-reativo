function composicao(...fns) {
  return function (valor) {
    return fns.reduce((acc, fn) => {
      return fn(acc);
    }, valor);
  };
}

function gritar(t) {
  return t.toUpperCase();
}

function lento(t) {
  return t.split("").join(" ");
}

const resultado = composicao(gritar, lento)("Visads");
console.log(resultado);

/**
 * Pode-se executar uma parte da função, e só depois
 * quando realmente precisar da informação final. Podemos chamar com o
 * parametro desejado
 */
const execTardia = composicao(gritar, lento);
const resTardia = execTardia("executado...");
