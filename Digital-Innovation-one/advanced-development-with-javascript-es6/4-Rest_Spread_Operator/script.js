//rest operator and spread operator...

//======REST
function sum(...args)
{
    return args.reduce((acc, value) => acc + value, 0);
}
console.log(sum(10, 10));

//=======SPREAD

const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);

const sum2 = (...rest) => 
{
    return multiply(...rest);
}
console.log(sum2(5, 5, 5, 2,3));

const str = "Felipe D. Santos";

function logArgs(...args2)
{
    console.log(args2);
}
logArgs(...str);

const arr = [1, 2, 3, 4];

function logArgsArr(a, b, c, d)
{
    console.log(a, b, c, d);
}
logArgsArr(...arr);

const arr2 = [...arr, 5, 6, 7];
console.log(arr2);

const obj = {
    number: 123 
}

const obj2 = {
    ...obj,
    message: "Hello"
}
console.log(obj2);
