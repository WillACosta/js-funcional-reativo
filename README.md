# JavaScript Funcional e Reativo

Estudo sobre os operadores e tecnicas da programação funcional e reativa com JavaScript

#### Operador Map

Um array possui o operador map, que passa uma callback para todos os elementos
dentro deste array.

O objetivo do map é transformar o array de origem em um novo array destino.

Retorna um novo array com a lógica aplicada da callback

### Operador Filter

A função callback fará uma verificação se o elemento fará parte
do novo array. true | false

### Operador reduce

Executa operações com base em um acumulador inicial. No final da execução traz a
resposta com todos os dados acumulados. (O tipo final será o mesmo do tipo inicial de acumulador)

### Promise

Uma promise será realizada no futuro

#### Funções Puras e Impuras

O retornor da função é determinado apenas pelos valores de entrada. E não deve ocasionar efeitos colaterais

```javascript
//Função impura pois o retorno depende de
//um valor externo, nesse caso o PI -> O que pode ocasionar efeitos colaterais
const PI = 3.14;
function area(raio){
  return raio * raio * PI;
}

//Função Pura : Todo o cálculo é feito dentro do escopo da função
function area(raio, pi){
  return raio * raio * pi;
}
```

### Conceitos

- High Order Function:
  Funções que operam em outras funções
  tomando as mesmas como argumentos ou retornando-as
  são as high-order functions.

- First Class Functions::
  As funções são tratadas como variáveis

- Closure::
  Uma função lembra o seu escopo léxico, mesmo se executada fora do escopo

- Currying::
  Uma função que chama outra função, recebendo parametros de forma parcial

- Lazy Evaluation:
  Processamento tardio, a execução só finalizará assim que tiver todos os parametros

- Functor
  Um Wrapper para os objetos (container), encapsula os dados e implementam a função MAP

### Operador flat

Achata um array, caso exista array dentro de array (matriz). Pode-se usar o flat para achatar
o array em determinado nivel array.

```javascript
  let array = ['A', 'B', 'C', ['D', 'E', 'F']];
  array.flat(1); // ['A','B', 'C', 'D', 'E', 'F'];
```
