//Array é um functor
const nums = [3, 8, 10, 1, 5, 15];

const a = nums.map((el) => el + 10).map((el) => el * 2);
console.log(nums, a);
