const fn = require("./funcoes");

const path = require("path");
const pathFiles = path.join(__dirname, "legendas");

const _ = require("lodash");

const { toArray, map, groupBy, mergeMap, reduce } = require("rxjs/operators");

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
  .pipe(
    // fn.filterExt(".srt"),
    // fn.readContents(),
    // fn.textSeparation("\n"),
    // // fn.removeEmpty(),
    // fn.removeNumber(),
    // fn.removeCharacters(symbols),
    // fn.textSeparation(" "),
    // fn.removeNumber(),

    // /**
    //  * Faz um agrupamento de streams em funçao de uma condição
    //  */
    // groupBy((el) => el),
    // //Concatena os streams dos observables
    // mergeMap((grupo) => grupo.pipe(toArray())),
    // //Gera um novo stream
    // map((palavras) => ({ elemento: palavras[0], qtd: palavras.length })),
    // toArray(), // Transforma o stream de dados em arra              y
    // map((array) => _.sortBy(array, (el) => -el.qtd))
  )
  .subscribe(console.log);
