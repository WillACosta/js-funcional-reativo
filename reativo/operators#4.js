const { of, Observable } = require("rxjs");

/**
 * Criamos um operador customizado que retorna um stream com strings terminadas com
 * determinado valor
 * @param {*} valueEnds
 */
function endWith(valueEnds) {
  return function (source) {
    return new Observable((subscriber) => {
      source.subscribe({
        next(v) {
          if (Array.isArray(v)) {
            v.filter((el) => el.endsWith(valueEnds));
          } else if (v.endsWith(valueEnds)) {
            subscriber.next(v);
          }
        },
        error(e) {
          subscriber.error(e);
        },
        complete() {
          subscriber.complete();
        },
      });
    });
  };
}

of("Will", "Rian", "Amabile", "Mirellen")
  .pipe(endWith("n"))
  .subscribe(console.log);

console.log("What?");
