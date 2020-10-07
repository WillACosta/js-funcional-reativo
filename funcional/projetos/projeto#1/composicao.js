function composicao(...fns) {
  return function (valor) {
    return fns.reduce(async (acc, fn) => {
      if (Promise.resolve(acc) === acc) {
        return fn(await acc);
      } else {
        return fn(acc);
      }
    }, valor);
  };
}

const fn = require("./funcoes");

const path = require("path");
const pathFiles = path.join(__dirname, "legendas");

const symbols = [
  ".",
  "?",
  "-",
  '"',
  "_",
  "<i>",
  "</i>",
  "♪",
  "\r",
  "[",
  "]",
  "(",
  ")",
];

fn.readDir(pathFiles)
  .then((files) => fn.filterExt(files, ".srt"))
  .then((array) => fn.readContents(array))
  .then((contents) => contents.join("\n")) //Mesclar os valores no arquivo
  .then((contents) => contents.split("\n")) //Quebrar em linhas

  // .then((array) => fn.removeEmpty(array)) // Remover linhas vazias
  .then(fn.removeEmpty) // Código enxuto
  .then(fn.removeWith("-->")) // Remover linhas de intervalos da legenda
  .then((linhas) => fn.removeNumber(linhas)) // Remover linhas que exista apenas números
  .then(fn.removeCharacters(symbols))

  .then((contents) => contents.join(" ")) //Concatenar
  .then((contents) => contents.split(" ")) //Quebrar em espaços em branco
  .then(fn.removeEmpty)
  .then((linhas) => fn.removeNumber(linhas))
  .then(fn.groupWords) //Agrupar e contar as palavras
  .then(fn.orderbyNumber("qtd", "asc"))
  .then(console.log);
