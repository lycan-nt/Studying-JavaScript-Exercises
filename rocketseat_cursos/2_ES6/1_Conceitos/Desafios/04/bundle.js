"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var empresa = {
  nome: 'RocktSeat',
  endereco: {
    estado: 'São paulo',
    cidade: 'São paulo'
  }
};

var nome = _objectSpread({}, empresa).nome;

console.log(nome);

var estado = _objectSpread({}, empresa.endereco).estado;

console.log(estado);

var cidade = _objectSpread({}, empresa.endereco).cidade;

console.log(cidade); //---------------------------------------------------

function mostraInfo(usuario) {
  var nome = _objectSpread({}, usuario).nome;

  var idade = _objectSpread({}, usuario).idade;

  return "".concat(nome, " tem ").concat(idade, " anos");
}

;
console.log(mostraInfo({
  nome: 'Felipe D. Santos',
  idade: 24
}));
