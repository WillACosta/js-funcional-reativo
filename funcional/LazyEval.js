function normal(a, b) {
  const fim = Date.now() + 2500;
  while (Date.now() < fim) {}

  const valor = Math.pow(a, 3);
  return valor + b;
}

console.time("#1");
console.log(normal(3, 100));
console.log(normal(3, 200));
console.log(normal(3, 300));
console.timeEnd("#1");

function lazyEval(a) {
  //Processamento Pesado
  const fim = Date.now() + 2500;
  while (Date.now() < fim) {}

  const valor = Math.pow(a, 3);
  return function (b) {
    return valor + b;
  };
}

/**
 * O LazyEval é mais rápido, pois o processamento pesado é feito
 * apenas uma vez (closure). E só finalizará assim que tiver todos os parametros
 */
console.time("#2");
const processPesado = lazyEval(3); //Closure
console.log(processPesado(100));
console.log(processPesado(200));
console.log(processPesado(300));
console.timeEnd("#2");
