"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//REST
var arr = [1, 2, 3, 4, 5, 6];
var x = arr[0],
    y = arr.slice(1);
console.log(x);
console.log(y); //----------------------------------

function soma() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
}

console.log(soma(1, 5, 6));
console.log(soma(5, 5, 5, 5, 5)); //SPREAD

var usuario = {
  nome: 'Felipe D. Santos',
  endereco: {
    estado: 'Bahia',
    cidade: 'VDC'
  }
};

var usuario2 = _objectSpread({}, usuario, {
  nome: 'Marcella'
});

console.log(usuario2);

var usuario3 = _objectSpread({}, usuario, {
  endereco: {
    cidade: 'Barra'
  }
});

console.log(usuario3); //-----------------------------------------------

var nome = 'Felipe D. Santos';
var idade = 24;
console.log("O usuario: ".concat(nome, " tem ").concat(idade, " anos"));
var nome1 = 'Diego';
var idade1 = 23;
var usuariot = {
  nome1: nome1,
  idade1: idade1,
  cidade: 'Rio do Sul'
};
console.log(usuariot);
