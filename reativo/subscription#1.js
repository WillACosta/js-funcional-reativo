/** Esperar 3000ms
 * gerar números de 500ms
 *
 * depois de 1000ms unsubscribe
 */

const { timer, Subscription } = require("rxjs");

const obs = timer(3000, 500);

const sub1 = obs.subscribe((num) => {
  console.log(`#1 G. Number ${num}`);
});

const sub2 = obs.subscribe((num) => {
  console.log(`#2 G. Number ${num}`);
});

const subPai = new Subscription();
subPai.add(sub1);
subPai.add(sub2);
/**
 * Adiciona outras duas inscrições para serem manipuladas
 */

setTimeout(() => {
  subPai.unsubscribe(); // Termina a inscrição pai e consequentemente as filhas que foram adicionadas
}, 1000);
