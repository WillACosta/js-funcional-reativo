function gNumber(min, max, t) {
  if (min > max) {
    [max, min] = [min, max]; // Desestrutura as propiedades e inverte os valores nas posições
  }
  setTimeout(() => {
    return new Promise((resolve) => {
      const rand = parseInt(Math.random() * (max - min + 1) + min);
      resolve(rand);
    });
  }, t);
}

console.time("promise");

/**
 * Promise.all executa todas as promessas dentro do array
 * E só então executa o then principal;
 */
function gVariousN() {
  return Promise.all([
    gNumber(1, 30, 4000),
    gNumber(1, 30, 500),
    gNumber(1, 30, 1000),
  ]);
}

gVariousN()
  .then(console.log)
  .then(() => {
    console.timeEnd("promise"); //Mostrar o temporizador
  });
