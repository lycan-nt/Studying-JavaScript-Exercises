//classic
var obj = {
    prop1: "DIO" 
};

//passing var
var prop2 = "prop2";

var obj2 = {
    prop2
}
console.log(obj, obj2);

//Passing functions
function method1() {
    console.log("Mehotd");
}

var obj3 = {
    method1
}
obj3.method1();

var obj4 = {
    sum: function sum(a, b) {
        return a + b;
    }
};
console.log(obj4.sum(5,5));

//omitting the word function
var obj5 = {
    sum(a, b) {
        return a + b;
    }
};
console.log(obj5.sum(10, 90));