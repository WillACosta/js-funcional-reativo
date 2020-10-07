function gNumber(min, max) {
  if (min > max) {
    [max, min] = [min, max]; // Desestrutura as propiedades e inverte os valores nas posições
  }

  return new Promise((resolve) => {
    const rand = parseInt(Math.random() * (max - min + 1) + min);
    resolve(rand);
  });
}

gNumber(10, 30)
  .then((n) => n * 2)
  .then((n) => `Resolve * 2 = ${n}`)
  .then(console.log);
