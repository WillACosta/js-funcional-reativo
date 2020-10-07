/**
 * Funções que operam em outras funções
 * tomando as mesmas como argumentos ou retornando-as
 * são as high-order functions.
 */

//ex:
function exec(fn, ...params) {
  return fn(...params);
}

function exec2(fn, ...params) {
  return function (text) {
    return ` ${text} ${fn(...params)}`;
  };
}

function somar(a, b, c) {
  return a + b + c;
}

/**
 * A função exec recebe uma função como parametro
 * e também n parametros podem ser passados.
 * O operador rest ... receberá os valores separados
 * e juntará todos em um array
 */
console.log(exec(somar, 4, 5, 6));
console.log(exec2(somar, 4, 5, 6)("Resultado da soma:: "));
