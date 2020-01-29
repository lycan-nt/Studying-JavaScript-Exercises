"use strict";

var usuario = [{
  nome: 'Diego',
  idade: '23',
  empresa: 'RocktSeat'
}, {
  nome: 'Gabriel',
  idade: '15',
  empresa: 'RocketSeat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'RocktSeat'
}];
var idade = [];
idade = usuario.map(function () {
  var idade = usuario.idade;
});
console.log(idade);
