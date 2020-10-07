const readline = require("readline");

function getResponse(question) {
  //Cria uma interface de entrada e saida no console
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(question, (resp) => {
      resolve(resp);
      rl.close();
    });
  });
}

// getResponse("Oh my god! What is tath?").then(console.log);

function oberver() {
  console.log("RUN tasks...");
}

function oberver2() {
  setTimeout(() => {
    console.log("SEND response...");
  }, 1000);
}

/**
 * Subject fica monitorando as atividades do evento
 * @param {array} observers
 */
async function subject(observers) {
  while (true) {
    const resp = await getResponse("Are you right!? (S/N/Q)");
    if (resp === "S") {
      (observers || []).forEach((element) => element());
    } else if (resp === "Q") {
      break;
    }
  }
}

/**
 * Registrado dois observadores
 */
subject([oberver, oberver2]);
