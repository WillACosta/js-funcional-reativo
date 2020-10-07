const fs = require("fs");
const path = require("path");
const { Observable } = require("rxjs");

function createPipeableOperator(operatorFn) {
  return function (sourceObs) {
    return Observable.create((subscriber) => {
      const sub = operatorFn(subscriber);
      sourceObs.subscribe({
        next: sub.next,
        error: sub.error || ((e) => subscriber.error(e)),
        complete: sub.complete || ((e) => subscriber.complete(e)),
      });
    });
  };
}

function readDir(pathFile) {
  return new Observable((subscriber) => {
    try {
      fs.readdirSync(pathFile).forEach((file) => {
        subscriber.next(path.join(pathFile, file));
      });
      subscriber.complete();
    } catch (e) {
      subscriber.error(e);
    }
  });
}

function filterExt(pattern) {
  return createPipeableOperator((subscriber) => ({
    next(text) {
      if (text.endsWith(pattern)) {
        subscriber.next(text);
      }
    },
  }));
}

function textSeparation(symbol) {
  return createPipeableOperator((subscriber) => ({
    next(text) {
      text.split(symbol).forEach((p) => subscriber.next(p));
    },
  }));
}

function readContents() {
  return createPipeableOperator((subscriber) => ({
    next(pathFile) {
      try {
        const content = fs.readFileSync(pathFile, { encoding: "utf-8" });
        subscriber.next(content.toString());
      } catch (error) {
        subscriber.error();
      }
    },
  }));
}

function removeEmpty(array) {
  return array.filter((el) => el.trim());
}

function removeWith(pattern) {
  return createPipeableOperator((subscriber) => ({
    next(text) {
      if (text.trim()) {
        subscriber.next(text);
      }
    },
  }));
}

function removeNumber() {
  return createPipeableOperator((subscriber) => ({
    next(text) {
      const num = parseInt(text.trim());
      if (num !== num) {
        subscriber.next(text);
      }
    },
  }));
}

function removeCharacters(symbols) {
  return createPipeableOperator((subscriber) => ({
    next(text) {
      const fullText = symbols.reduce((acc, s) => {
        return acc.split(s).join("");
      }, text);
      subscriber.next(fullText);
    },
  }));
}

function groupWords() {
  return createPipeableOperator((subscriber) => ({
    next(words) {
      const agrupado = Object.values(
        words.reduce((acc, w) => {
          const wTemp = w.toLowerCase();
          const qtd = acc[wTemp] ? acc[wTemp].qtd + 1 : 1;
          acc[wTemp] = { element: wTemp, qtd };
          return acc;
        }, {})
      );
      subscriber.next(agrupado);
    },
  }));
}

module.exports = {
  readDir,
  readContents,
  filterExt,
  removeEmpty,
  removeWith,
  removeNumber,
  removeCharacters,
  groupWords,
  textSeparation,
};
