//Criar um stream de numeros entre min e max

const { Observable, noop } = require("rxjs");

function betwenn(min, max) {
  if (min > max) {
    [max, min] = [min, max];
  }

  return new Observable((subscriber) => {
    Array(max - min)
      .fill() //gera e preenche um novo array do tamanho do original (no caso os campos como undefined)
      .map((_, i) => {
        subscriber.next(min + i);
      });

    // for (let index = min; index < max; index++) {
    //   subscriber.next(index);
    // }
    subscriber.complete();
  });
}

betwenn(4, 10).subscribe(
  (num) => console.log(num),
  noop,
  () => console.log("End.")
);
