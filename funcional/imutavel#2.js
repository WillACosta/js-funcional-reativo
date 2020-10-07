const nums = [3, 8, 10, 1, 5, 15];

/**
 * # Mutável 1
 */
let total = 0;
for (let i = 0; i < nums.length; i++) {
  total += nums[i];
}

console.log(total);

/**
 * # Imutável - Reduce
 */
const somar = (a, b) => a + b;
const totalImt = nums.reduce(somar);
console.log(totalImt);

/**
 * # Imutável - Recursividade
 */
function sumArray(array, total = 0) {
  if (array.length === 0) return total;
  return sumArray(array.slice(1), total + array[0]);
}

console.log(sumArray(nums));
