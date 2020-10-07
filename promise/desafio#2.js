const carrinho = [
  { nome: "Caneca", qtde: 2, preco: 7.99, fragil: true },
  { nome: "Impressora", qtde: 1, preco: 1000.35, fragil: true },
  { nome: "Caneta", qtde: 5, preco: 0.9, fragil: true },
  { nome: "Café", qtde: 10, preco: 8.99, fragil: false },
  { nome: "Lápis", qtde: 2, preco: 0.5, fragil: true },
  { nome: "Mouse", qtde: 1, preco: 12.99, fragil: true },
];

// 1. fragil true;
//2 qtde: * preco: -> total
//3. media

/**
 * Retornar a média de todos os produtos frágeis
 * @param {*} element
 */

// const mult = (element) => element.qtde * element.preco;
// const filt = (element) => element.fragil;
// const somar = (a, b) => a + b;

// console.log(carrinho.filter(filt).map(mult).reduce(somar) / carrinho.length);

const media = carrinho
  .filter((item) => item.fragil)
  .map((item) => item.qtde * item.preco)
  .reduce(
    (acc, el) => {
      const nQtde = acc.qtde + 1;
      const nTotal = acc.total + el;
      return {
        qtde: nQtde,
        total: nTotal,
        media: nTotal / nQtde,
      };
    },
    { qtde: 0, total: 0, media: 0 } //Objeto inicial que será usado como acumulador
  );

console.log(media);
