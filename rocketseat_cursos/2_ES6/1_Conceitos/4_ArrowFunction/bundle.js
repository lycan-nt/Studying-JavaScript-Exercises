"use strict";

var arr = [1, 2, 3, 4, 5, 6];
var newArr = arr.map(function (item) {
  return item * 2;
});
console.log(newArr);

var teste = function teste() {
  return {
    Nome: 'Felipe D. Santos'
  };
};

console.log(teste());
