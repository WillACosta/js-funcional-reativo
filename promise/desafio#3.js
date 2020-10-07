/**
 * Fazer a leitura de um arquivo para uma promise
 */

const fs = require("fs");
const path = require("path");

function read(ca) {
  /**
   * Retorna uma nova promesa e quando ela se resolver faça
   */
  return new Promise((resolve) => {
    fs.readFile(ca, (_, content) => {
      resolve(content.toString()); //Chamada de resolve
    });
  });
}

const caminho = path.join(__dirname, "dados.txt");
read(caminho).then((res) => {
  console.log(res);
});
