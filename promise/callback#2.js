/**
 *
 */

const fs = require("fs");
const path = require("path");

const caminho = path.join(__dirname, "dados.txt");

console.log(__dirname); //Pega o caminho atual

function exibirConteudo(err, conteudo) {
  console.log(conteudo.toString());
}

// fs.readFile(caminho, {}, exibirConteudo);

console.log("Inicio");
/** Em JS pode-se omitir algum parametro não obrigatorio */
fs.readFile(caminho, exibirConteudo);
console.log("Fim");

/**
 * Callbacks são utilizadas em programação assincrona
 * Onde uma função será chamada somente depois do evento finalizar
 */

// Irá esperar o evento de leitura
console.log("Inicio");
const conteudo = fs.readFileSync(caminho);
console.log(conteudo.toString);
console.log("Fim");
