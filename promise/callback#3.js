const nums = [1, 2, 3, 4, 5];

const dobro = (n) => n * 2;
console.log(nums.map(dobro));

/** Pode se fazer a chamada do map com todos os parametros esperados */
const dobroComplex = (n, i, a) => n * 2 + i + a.length;
console.log(nums.map(dobroComplex));

/** Exemplo */

const carrinho = [
  { nome: "Caneca", qtde: 2, preco: 7.99 },
  { nome: "Impressora", qtde: 1, preco: 1000.35 },
  { nome: "Caneta", qtde: 5, preco: 0.9 },
  { nome: "Café", qtde: 10, preco: 8.99 },
  { nome: "Lápis", qtde: 2, preco: 0.5 },
  { nome: "Mouse", qtde: 1, preco: 12.99 },
];

// console.log(
//   carrinho.map((element) => {
//     element.nome;
//   })
// );

const getNome = (element) => element.nome;
console.log(carrinho.map(getNome));

const getTotal = (element) => element.qtde * element.preco;
console.log(carrinho.map(getTotal));

/** Representação do funcionamento interno do MAP */

Array.prototype.myMap = function (fn) {
  const mapped = [];

  for (let i = 0; i < this.length; i++) {
    mapped.push(fn(this[i], i, this));
  }

  return mapped;
};

const getNome = (element) => element.nome;
console.log(carrinho.myMap(getNome));
