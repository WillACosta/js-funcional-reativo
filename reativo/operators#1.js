/**
 * 1. Operador de criação
 * 2. Operador encadeavel (Pipeable Op.)
 */

const { of } = require("rxjs"); // 1
const { last, map } = require("rxjs/operators"); // 2. Filtra todos os dados e retorna o ultimo

of(1, 2, "ana", false, "last") // Cria um observable com stream de dados
  .pipe(
    last(),
    map((v) => v[0]),
    map((v) => `Value of: ${v}`)
  )
  .subscribe((valor) => {
    console.log(valor);
  });
