/**
 * Async await irá esperar o retorno da promessa
 */

function waitForTime(t = 2000) {
  return new Promise(function (resolve) {
    setTimeout(() => resolve(), t);
  });
}

// waitForTime(2000)
//   .then(() => console.log("Exec. P I..."))
//   .then(waitForTime)
//   .then(() => console.log("Exec. P II.."))
//   .then(waitForTime)
//   .then(() => console.log("Exec. P III."));

function returnValue() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(10), 5000);
  });
}

async function exec() {
  let v = await returnValue(); // Atribui o valor recebido na resposta da promise deṕis de processar

  await waitForTime(1500);
  console.log("Exec. Async/Await I.." + v);

  await waitForTime(1500);
  console.log("Exec. Async/Await II.." + (v + 1));

  await waitForTime(1500);
  console.log("Exec. Async/Await III..");
}

exec();
