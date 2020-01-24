"use strict";

var usuario = {
  nome: 'Felipe D. Santos'
};
usuario.nome = 'Felipe NextDev';
console.log(usuario.nome);

function teste(x) {
  var y = 2;

  if (x > 5) {
    console.log(x, y);
  }
}

teste(10);
