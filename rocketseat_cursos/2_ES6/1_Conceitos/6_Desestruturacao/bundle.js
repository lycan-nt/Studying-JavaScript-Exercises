"use strict";

var usuario = {
  nome: 'Felipe D. santos',
  idade: 24,
  endereco: {
    cidade: 'Vitoria da conquista',
    uf: 'BA'
  }
};
console.log(usuario);
var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade;
console.log("Nome: ".concat(nome, " / Idade: ").concat(idade, " / Endere\xE7o: ").concat(cidade));

function mostraNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome, idade);
}

mostraNome(usuario);
