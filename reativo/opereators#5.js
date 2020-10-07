const { from, Observable } = require("rxjs");

/**
 * Refatoração do operators#3
 * @param {*} nextFn
 */
function createPipeableOperator(operatorFn) {
  return function (sourceObs) {
    return Observable.create((subscriber) => {
      sourceObs.subscribe(operatorFn(subscriber));
    });
  };
}

function firstEl() {
  return createPipeableOperator((subscriber) => ({
    next(value) {
      subscriber.next(value);
      subscriber.complete();
    },
  }));
}

from([1, 2, 3, 4, 5])
  .pipe(
    firstEl()
    // lastEl()
  )
  .subscribe(console.log);
