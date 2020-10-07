const fs = require("fs");
const path = require("path");

/**
 * Faz a leitura do caminho dos arquivos
 * @param {string} pathFile - Camiho dos arquivos
 */
function readDir(pathFile) {
  return new Promise((resolve, reject) => {
    try {
      let files = fs.readdirSync(pathFile);
      files = files.map((f) => path.join(pathFile, f));
      resolve(files);
    } catch (e) {
      reject(e);
    }
  });
}

/**
 * Filtra um array de caminhos para uma extensão permitida
 * @param {array} array - Array de caminhos
 * @param {string} pattern - Extensão para filtrar
 */
function filterExt(array, pattern) {
  return array.filter((el) => el.endsWith(pattern));
}

/**
 * Faz a leitura de um único arquivo
 * @param {string} pathFile - Caminho do arquivo
 */
function readOnefile(pathFile) {
  return new Promise((resolve, reject) => {
    try {
      const content = fs.readFileSync(pathFile, { encoding: "utf-8" });
      resolve(content.toString());
    } catch (e) {
      reject(e);
    }
  });
}

/**
 * Faz a leitura de todos os conteúdos de array de caminhos
 * @param {string} pathsFiles - Array de caminhos
 */
function readContents(pathsFiles) {
  return Promise.all(pathsFiles.map((p) => readOnefile(p)));
}

function removeEmpty(array) {
  return array.filter((el) => el.trim());
}

// /**
//  * Remove a string com base no parametro pattern
//  * @param {string} array - Array de strings
//  * @param {string} pattern - Padrão que verifica se stá incluso
//  */
// function removeWith(array, pattern) {
//   return array.filter((el) => !el.includes(pattern));
// }

/**
 * Remove a string com base no parametro pattern
 * Só irá retornar o array quando ele existir
 * @param {string} array - Array de strings
 * @param {string} pattern - Padrão que verifica se stá incluso
 */
function removeWith(pattern) {
  return function (array) {
    return array.filter((el) => !el.includes(pattern));
  };
}

function removeNumber(array, pattern) {
  return array.filter((el) => {
    const num = parseInt(el.trim());
    return num !== num; // Retorna o valor caso não seja um NaN
  });
}

/**
 * Remove um array de caracteres dentro de uma string
 * @param {strin} symbols - Array de strings
 */
function removeCharacters(symbols) {
  return function (array) {
    return array.map((el) => {
      return symbols.reduce((accText, s) => {
        return accText.split(s).join("");
      }, el);
    });
  };
}

/**
 * Faz a contagem de quntas vezes determinada palavra aparece
 * @param {array} words - Array de palavras
 */
function groupWords(words) {
  return Object.values(
    words.reduce((acc, w) => {
      const wTemp = w.toLowerCase();
      const qtd = acc[wTemp] ? acc[wTemp].qtd + 1 : 1;
      acc[wTemp] = { element: wTemp, qtd };
      return acc;
    }, {})
  );
}

/**
 * Ordena valores números de um array
 * @param {objeto de atributos} atrr - Objeto de atributos
 */
function orderbyNumber(atrr, order = "desc") {
  return function (array) {
    const asc = (o1, o2) => (01)[atrr] - o2[atrr];
    const desc = (o1, o2) => (02)[atrr] - o1[atrr];
    return [...array].sort(order === "asc" ? asc : desc);
  };
}

/**
 * Separar as responsabilidades das funções
 * e focar na imutabilidade
 */

module.exports = {
  readDir,
  readContents,
  filterExt,
  removeEmpty,
  removeWith,
  removeNumber,
  removeCharacters,
  groupWords,
  orderbyNumber,
};
