/**
 * A Proessa é uma função que será resolvida no futuro
 * E quando ela for concluída chamará outra função
 */
let p = new Promise(function (resolve) {
  resolve({ a: 1, b: 2 });
});

p.then((p) => {
  console.log(p);
});

/** A promisse quando resolvida pode ser executar n vezes até onde se queira*/
let pro = new Promise(function (resolve) {
  resolve(["Alface", "Cenoura"]);
});

const fnLwC = (letra) => letra.toLowerCase();

pro
  .then((p) => p[0])
  .then((pLetra) => pLetra[0])
  .then(fnLwC)
  .then(console.log); //Chama a função de log no console para a resposta final da promessa
