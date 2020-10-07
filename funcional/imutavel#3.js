const person = {
  name: "Will",
  alt: 1.7,
  city: "Gnhs",
};

/** Atribuição por referencia
 * Mesmo atribuindo a outra constante
 * o valor do objeto de origem é alterado
 */
// const newP = person;

function alterP(person) {
  const newP = { ...person }; //Todos os atributos de person estarão em um novo objeto
  newP.name = "New Name";
  return newP;
}

// newP.name = "Will X";

const newP = alterP(person);
console.log(person, newP);

// ATRIBUIÇÃO POR VALOR

let a = 3;
let b = a;

a++;
