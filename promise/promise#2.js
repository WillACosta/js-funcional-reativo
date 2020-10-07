// setTimeout(() => {
//   console.log("Exec ...");

//   setTimeout(() => {
//     console.log("Exec ...");
//   }, 2000);
// }, 2000);

/**
 * Chama uma promise para ser resolvida depois de determinado tempo
 * @param {*} t - Tempo de espera para a chamada da promise
 */
function waitForTime(t = 2000) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      console.log("Resolvendo sua vida ...");
      resolve("Resolvida!");
    }, t);
  });
}

let promise1 = waitForTime(3000).then((txt) => console.log(txt));
