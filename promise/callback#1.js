// exec(somarTerminal, 56, 38);
// exec(subTerminal, 56, 38);

/**
 * Faz-se uma chamada de evento
 * assim que o evento terminar outra função é chamada
 * @param {*} fn
 * @param {*} a
 * @param {*} b
 */

const exec = (fn, a, b) => {
  return fn(a, b);
};

const somarTerminal = (a, b) => a + b;
const subTerminal = (a, b) => a - b;

console.log(exec(somarTerminal, 56, 38));
console.log(exec(subTerminal, 56, 38));

const callBack = () => console.log("loop...");
setInterval(callBack, 1000);
