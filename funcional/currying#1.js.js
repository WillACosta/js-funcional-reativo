// Passar parametros de forma parcial para a função

function validTextBetween(min, max, err, value) {
  const tam = (value || "").trim().length;

  if (tam < min || tam > max) {
    throw err;
  }
}

const product = { nome: "Abac", preco: 20.85, desc: 0.2 };

// validTextBetween(5, 10, "Nome inválido", product.nome);

/**
 * CURRYNG | v2 - Lazy Evaluation
 * Apenas será processada assim que todos os parametros forem passados
 */

function validTextBetweenV2(min) {
  return function (max) {
    return function (err) {
      return function (value) {
        const tam = (value || "").trim().length;

        if (tam < min || tam > max) {
          throw err;
        }
      };
    };
  };
}

validTextBetweenV2(5)(255)("Nome Inválido")(product.nome);

/**
 * Vantagem do Currying é o reuso de diferentes versões
 * das funções
 */

const tamDefault = validTextBetweenV2(5)(255); //Reuso para um Tamanho padrão
const errDefault = tamDefault("Descrição inválida!");

errDefault(product.nome);

/**
 * V3 ##
 */

function setValidation(fn) {
  return function (value) {
    try {
      fn(valor);
    } catch (e) {
      return { err: e };
    }
  };
}

const validName = setValidation(errDefault);

validName(product.nome);
