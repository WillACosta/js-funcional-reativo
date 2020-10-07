const carrinho = [
  { nome: "Caneca", qtde: 2, preco: 7.99 },
  { nome: "Impressora", qtde: 1, preco: 1000.35 },
  { nome: "Caneta", qtde: 5, preco: 0.9 },
  { nome: "Café", qtde: 10, preco: 8.99 },
  { nome: "Lápis", qtde: 2, preco: 0.5 },
  { nome: "Mouse", qtde: 1, preco: 12.99 },
];

const getNames = (item) => item.nome;
const qtdeMZero = (item) => item.qtde > 2;

// const itensv = carrinho.filter(qtdeMZero);
// const itensv = carrinho.filter(qtdeMZero).map(getNames);

/** Funcionamento interno do filter */
Array.prototype.myFilter = function (fn) {
  const newArr = [];

  for (let index = 0; index < this.length; index++) {
    if (fn(this[index], index, this)) {
      newArr.push(this[index]);
    }
  }

  return newArr;
};

const itensv = carrinho.myFilter(qtdeMZero).map(getNames);

console.log(itensv);
