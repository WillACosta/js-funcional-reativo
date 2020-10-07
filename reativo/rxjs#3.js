const { Observable, Subscriber } = require("rxjs");

/**
 * Promise só permite uma chamada da resposta
 */
const promise = new Promise((resolve) => {
  resolve("Promise resolve...");
});

/**
 * Observer permite a chamada de n valores como resposta (stream)
 */
const observer = new Observable((subscriber) => {
  subscriber.next("Observer next...");
  subscriber.next("Observer next 2...");
});

observer.subscribe(console.log);

const observerA$ = Observable.create((subscriber) => {
  subscriber.next("Next ...");

  if (Math.random() > 0.5) {
    subscriber.complete();
  } else {
    subscriber.error("Hudson. We've a problem!");
  }
});

/**
 * Aceita as 3 funções |
 * F. que recebe o valor da resposta
 * F. que trata o erro
 * F. chamada ao ser informado o complete() do subject
 *
 */
// observerA$.subscribe(
//   (v) => console.log(`Value: ${v}`),
//   (error) => console.error(error), // operador noop (NO Operation) ignora a chamada da operação mesmo se acontecer
//   () => console.log("Exit.")
// );

// observerA$.subscribe({
//   next(v) {
//     console.log(`Value: ${v}`);
//   },
//   error(msg) {
//     console.log(`Err: ${msg}`);
//   },
//   complete() {
//     console.log("Exit."); //Finaliza o observable e não chama mais o met. next
//   },
// });
