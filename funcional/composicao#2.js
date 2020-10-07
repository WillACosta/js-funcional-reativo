/**
 * Verificar se o objeto é uma promise
 * p = new Promise( ()=> {})
 * Promise.resolve(p) === p  // Case seja, teremos um valor true
 */
function composicao(...fns) {
  return function (valor) {
    return fns.reduce(async (acc, fn) => {
      if (Promise.resolve(acc) === acc) {
        return fn(await acc);
      } else {
        return fn(acc);
      }
    }, valor);
  };
}

function gritar(t) {
  return t.toUpperCase();
}

function lento(t) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(t.split("").join(" "));
    }, 3000);
  });
}
const execTardia = composicao(gritar, lento);
execTardia("executado...").then(console.log);
