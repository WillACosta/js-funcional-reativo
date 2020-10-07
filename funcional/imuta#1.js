function order(array) {
  /**
   * Retorna um novo array, operador spred
   * pega todas as propriedades e jogam em um novo
   */
  return [...array].sort();
}

const nums = [3, 8, 10, 1, 5, 15];

/**
 * Congela o objeto e não permite alterações
 */
const numsFreeza = Object.freeze[(3, 8, 10, 1, 5, 15)];

const nOrder = order(nums);
console.log("Original: " + nums, "Novo: " + nOrder);


