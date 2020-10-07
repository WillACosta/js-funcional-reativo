//O this sempre faz referencia à instância
// function Produto(n, p) {
//   this.n = n;
//   this.p = p;
// }

// const p1 = new Produto("Lapis", 8.59);
// console.log(p1.n);

class Produto {
  constructor(nome, preco, desconto = 0.5) {
    (this._nome = nome), (this.preco = preco), (this.desconto = desconto);
  }

  get nome() {
    return `Produto:: ${this._nome}`;
  }

  set nome(newN) {
    this._nome = newN;
  }

  /**
   * Diz para o JS que a função será chamada como um atributo (Getter)
   */
  get precoFinal() {
    return this.preco * (1 - this.desconto);
  }
}

/**
 * Define uma propiedade para todos oas instâncias de produto
 */
Object.defineProperty(Produto.prototype, "descString", {
  get: function () {
    return `${this.desconto * 100}% de desconto!`;
  },
});

const p1 = new Produto("Lapis", 8.59, 0.2);
console.log(p1.nome);
p1._nome = "NAN";
console.log(p1.nome);
console.log(p1.precoFinal);
console.log(p1.descString);
