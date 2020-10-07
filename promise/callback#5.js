const carrinho = [
  { nome: "Caneca", qtde: 2, preco: 7.99 },
  { nome: "Impressora", qtde: 1, preco: 1000.35 },
  { nome: "Caneta", qtde: 5, preco: 0.9 },
  { nome: "Café", qtde: 10, preco: 8.99 },
  { nome: "Lápis", qtde: 2, preco: 0.5 },
  { nome: "Mouse", qtde: 1, preco: 12.99 },
];

const cbT = (item) => item.qtde * item.preco;

const somar = (acc, el) => acc + el;

// const totalGeral = carrinho.map(cbT);
/**
 * Depois de mapear cada elemento e multiplicar
 * o reduce aplica a callback para somar todos os valores
 */
// const totalGeral = carrinho.map(cbT).reduce(somar);
// console.log(totalGeral);

/** Representação da função reduce */
Array.prototype.myReduce = function (fn, initial) {
  let acc = initial;
  for (let i = 0; i < this.length; i++) {
    if (!acc && i === 0) {
      acc = this[i];
      continue;
    }

    fn(acc, this[i], i, this);
  }

  return acc;
};

const totalGeral = carrinho.map(cbT).myReduce(somar);
console.log(totalGeral);
