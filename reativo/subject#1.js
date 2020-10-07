const { Observable, Subject } = require("rxjs");

function getObs() {
  return new Observable((subscriber) => {
    setTimeout(() => {
      console.log("#1 Obs...");
      subscriber.next(Math.random());
      subscriber.complete();
    }, 1000);
  });
}

const obs = getObs();
obs.subscribe(console.log);
obs.subscribe(console.log);

function getSubject() {
  const sub = new Subject();
  setTimeout(() => {
    console.log("#2 Subject...");
    sub.next(Math.random());
    sub.complete();
  }, 1000);
  return sub;
}

const sub = getSubject();
sub.subscribe(console.log);
sub.subscribe(console.log);

/**
 * Observable faz um 'unicast' e chama a função para cada
 * vez que exista um interessado na resposta, por isso
 * temos valores diferentes.
 *
 * Subject faz 'multicast' e passa o mesmo processamento
 * para todos os interessados, uma única vez.
 */
