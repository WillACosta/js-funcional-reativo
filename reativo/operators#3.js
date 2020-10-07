const { from, Observable } = require("rxjs");

function firstEl() {
  return function (sourceObs) {
    return Observable.create((subscriber) => {
      sourceObs.subscribe({
        next(v) {
          subscriber.next(v);
          subscriber.complete();
        },
      });
    });
  };
}

function lastEl() {
  return function (sourceObs) {
    return Observable.create((subscriber) => {
      let last;
      sourceObs.subscribe({
        next(v) {
          last = v;
        },
        complete() {
          if (last !== undefined) {
            subscriber.next(last);
          }
          subscriber.complete();
        },
      });
    });
  };
}

from([1, 2, 3, 4, 5])
  .pipe(
    // firstEl(),
    lastEl()
  )
  .subscribe(console.log);
