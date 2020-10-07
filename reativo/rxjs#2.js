//Desestruturação
const { interval, from } = require("rxjs");

const gNumbers = interval(500);

const subs = gNumbers.subscribe((num) => console.log(Math.pow(2, num)));

setTimeout(() => {
  subs.unsubscribe();
}, 5000);

/**
 * Operador 'from' cria um stream de dados e retorna
 * um observable
 */
from([85, 22, 35]).subscribe(console.log);
