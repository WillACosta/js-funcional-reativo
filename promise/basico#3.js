/**
 * Arrow Function
 *
 * Função de flecha pode ser anônima
 */
const hello = (text) => `Hello world! And ${text}`; //Retorno único

console.log(hello("teste"));

/**
 * Toda função de flecha com corpo deve ter um return
 * se precisar retornar algo
 * @param {*} numeros
 */
const somar = (numeros) => {
  let total = 0;
  for (let n of numeros) {
    total += n;
    return total;
  }
};

console.log(somar([1, 3, 4]));

/** OPERADOR REST
 *
 * Concatena todos os parametros recebidos
 * dentro de um array
 *
 */
const somar = (...numeros) => {
  console.log(Array.isArray(numeros));
  let total = 0;
  for (let n of numeros) {
    total += n;
    return total;
  }
};

console.log(somar(3, 2)); //Deveria passar um array, mas o operador rest fará isso

/** Exemplo de função de flecha II */

const potencia = (base) => {
  return function (exp) {
    return Math.pow(base, exp);
  };
};

console.log(potencia(2)(4));

/** Expressão reduzida */

const potencia = (base) => (exp) => Math.pow(base, exp);

/** This faz referencia ao contexto atual*/

/**
 * Define que o prototipo do array possui a função log
 * e imprime no console o valor de referencia da instância
 */
Array.prototype.log = function () {
  console.log(this);
};

const numeros = [1, 2, 3];
numeros.log(); // exibe: [1 ,2, 3 ]
