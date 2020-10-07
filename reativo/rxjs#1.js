/**
 * Stream de dados | Passar dados de forma continua para uma função
 */

const nums = [1, 10, 5, 6, 15];

function gElements(array) {
  /**
   * Retorna um objeto com as seguintes
   * propriedades
   */
  return {
    init(fn) {
      let index = 0;
      const i = setInterval(() => {
        if (index >= array.length) {
          clearInterval(i);
        }
        {
          fn(array[index]);
          index++;
        }
      }, 1000);

      return {
        parar() {
          clearInterval(i);
        },
      };
    },
  };
}

const temp = gElements(nums);

const subs = temp.init((num) => {
  console.log(Math.pow(2, num));
});

setTimeout(() => {
  subs.parar();
}, 4000);

/**
 * Passa os arrays completos em stream por vez
 */
gElements([
  ["W", "R", "A", "M"],
  [1, 5, 15, 23, 2],
]).init(console.log);
