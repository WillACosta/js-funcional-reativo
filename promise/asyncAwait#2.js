/**
 * Gera números aleatórios da mega sena
 * E caso algum número já tenha sido usado bloqueia-o (Não pode ter dupliidade)
 * @param {*} min
 * @param {*} max
 * @param {*} nForbbide
 */
function gNumber(min, max, nForbbide) {
  if (min > max) {
    [max, min] = [min, max]; // Desestrutura as propiedades e inverte os valores nas posições
  }

  return new Promise((resolve, reject) => {
    const rand = parseInt(Math.random() * (max - min + 1) + min);
    if (nForbbide.includes(rand)) {
      reject("N. Forbidden!");
    }
    resolve(rand);
  });
}

// async function gMegaSena(qN) {
//   const numbers = [];
//   for (const iterator of Array(10).fill()) {
//     await gNumber(1, 60, numbers);
//   }
//   return numbers;
// }

/**
 * Quando dentro de um try catch
 * Qualquer erro que aconteça dentro da execução será capturado com o try e ignorado o anterior
 * (POde ser usado para o sistema se recupera do erro acontecido dentro do try)
 * @param {*} qN
 *
 * Não é uma promise, mas o async/await simula o funionamento
 * (Se retornar o valor a promise é resolvida e se retornar um erro a promise é rejeitada)
 */
async function gMegaSena(qN) {
  try {
    const numbers = [];
    for (const iterator of Array(10).fill()) {
      numbers.push(await gNumber(1, 60, numbers));
    }
    return numbers;
  } catch (error) {
    //Código de recuperação de erro
    throw "Recuperação do erro!";
  }
}

gMegaSena(15).then(console.log).catch(console.log);

// gNumber(1, 5, [1, 2, 4]).then(console.log).catch(console.log);
