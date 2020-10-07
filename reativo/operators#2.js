/**
 * Requisição AJAX para a API do github | retorna os repositórios
 */
const { XMLHttpRequest } = require("xmlhttprequest");
const { ajax } = require("rxjs/ajax");
const { map, concatAll } = require("rxjs/operators");

ajax({
  createXHR: () => new XMLHttpRequest(),
  url: "https://api.github.com/users/willACosta/repos",
})
  .pipe(
    map((res) => JSON.parse(res.xhr.responseText)),
    concatAll(),
    map((repo) => repo.full_name)
  )
  .subscribe(console.log);

console.log("Will REPOS::");
