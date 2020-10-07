/**
 * Por padrão a execução é sincrona, mas podemos alterar
 * para asincrona com o scheduler
 */
const { from, asyncScheduler } = require("rxjs");
const { observeOn } = require("rxjs/operators");

console.log("Before...");

from([1, 2, 3, 4, 5]).pipe(observeOn(asyncScheduler)).subscribe(console.log);

console.log("After.");
