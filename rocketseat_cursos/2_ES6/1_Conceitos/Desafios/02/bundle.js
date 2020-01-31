"use strict";

var usuario = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'RocktSeat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'RocketSeat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'RocktSeat'
}];
var idade = [];
idade = usuario.map(function (elem) {
  return elem.idade;
});
console.log(idade);
var maior18 = usuario.filter(function (elem) {
  return elem.idade >= 18;
});
console.log(maior18);
var empresa = usuario.find(function (elem) {
  return elem.empresa === 'Google';
});
console.log(empresa);
var mult = usuario.map(function (next) {
  next.idade = next.idade * 2;
  return next;
});
console.log(mult.filter(function (elem) {
  return elem.idade < 50;
}));
