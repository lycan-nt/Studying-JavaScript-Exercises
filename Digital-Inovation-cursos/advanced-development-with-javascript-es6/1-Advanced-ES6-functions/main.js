//====================================Arrow functions==================================================

//--conventional function
function log(value) {
    console.log(value);
}
log('value');

//--Function Anonymous

var log = function(value) {
    console.log(value)
}
log('Anonymous');

var sumOld = function(a, b) {
    return a + b;
}
console.log(sumOld(8,8));

//--Arrouw Functions
var sum = (a, b) => a + b;
console.log(sum(10,10));