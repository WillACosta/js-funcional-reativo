const fn = require("./funcoes");

const path = require("path");
const pathFiles = path.join(__dirname, "legendas");

const _ = require("lodash");

const { toArray, map } = require("rxjs/operators");

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
    fn.filterExt(".srt"),
    fn.readContents(),
    fn.textSeparation("\n"),
    // fn.removeEmpty(),
    fn.removeNumber(),
    fn.removeCharacters(symbols),
    fn.textSeparation(" "),
    fn.removeNumber(),
    toArray(), // Transforma o stream de dados em array
    fn.groupWords(),
    map((array) => _.sortBy(array, (el) => -el.qtd))
  )
  .subscribe(console.log);
