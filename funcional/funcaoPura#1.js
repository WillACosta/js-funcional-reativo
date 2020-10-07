//Função impura pois o retorno depende de
//um valor externo, nesse caso o PI. -> O que pode ocasionar efeitos colaterais
const PI = 3.14;
function area(raio) {
  return raio * raio * PI;
}

//Função Pura
function area(raio, pi) {
  return raio * raio * pi;
}

//Impura
function gRandom(min, max) {
  const fat = max - min + 1;
  return (parseInt(Math.random() * fat) = min);
}

console.log(gRandom(5, 25));
