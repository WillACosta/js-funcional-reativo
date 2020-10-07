const { Observable, of, from } = require("rxjs");
const { map, toArray, groupBy, mergeMap } = require("rxjs/operators");

/**
 * Promise só permite uma chamada da resposta
 */
const promise = new Promise((resolve) => {
  resolve("Promise resolve...");
});

/**
 * Observer permite a chamada de n valores como resposta (stream)
 */
const observer = new Observable((subscriber) => {});

array = [
  { id: 1, nome: "A" },
  { id: 2, nome: "B" },
  { id: 3, nome: "C" },
  { id: 4, nome: "D" },
];

function getA(array) {
  return Observable.create((subscriber) => {
    array.forEach((element) => {
      const nData = { ...element, nome: "ALTERADO" };
      subscriber.next(nData);
        // console.log("INTERMEDIO");
    });
  });
}

// console.log("ANTES");
// getA(array).subscribe(console.log);
// console.log("DEPOIS");

const nan = getA(array);

nan.subscribe((res) => {
  let data = res;
  let a = [];
//   console.log(data);
  a.push(data);
  console.log(a);
  
});
