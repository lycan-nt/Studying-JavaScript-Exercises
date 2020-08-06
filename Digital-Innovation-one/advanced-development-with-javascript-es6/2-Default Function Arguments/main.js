function multiply(a, b = 1)
{
    return a * b;
}
console.log(multiply(10));

//Lazy evaluation
function radom() {
    return Math.random() * 10
}

function multiply2(a, b = radom())
{
    return a * b;
}
console.log(multiply2(10));