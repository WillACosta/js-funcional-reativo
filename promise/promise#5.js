/**
 * Testa se um valor informado tem chance de dar erro
 *
 * @param {*} value
 * @param {*} cError
 */
function resolveOrReject(value, cError) {
  return new Promise((resolve, reject) => {
    if (Math.random() < cError) {
      reject("Aconteceu um erro!");
    } else {
      resolve(value);
    }
  });
}

resolveOrReject("Ok...", 0.5)
  .then((v) => console.log(`Value: ${v}`))
  .then(
    (v) => consol.log(v),
    (err) => console.log(`Erro específico desse then: ${err}`)
  )

  //Tratamento de erro geral
  .catch((err) => {
    console.log(`Erro Geral:: ${err}`);
  });
