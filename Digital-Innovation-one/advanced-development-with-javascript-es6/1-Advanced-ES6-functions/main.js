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

//--Arrow Functions
var sum = (a, b) => a + b;
console.log(sum(10,10));

var mult = a => a * 2;
console.log(mult(10));

var createObj = () => ({ NextDev: true });
console.log(createObj());

//--Context
var obj = {
    showContext: function showContext() {
        setTimeout( () => {
            this.log("After 2000ms");
        }, 2000 );
    },

    log: function log(value) {
        console.log(value);
    }
}
obj.showContext();