// Destructuring Assigment

var [apple, banana, orange, [tomato]] = ['Apple', 'Banana', 'Orange', ['tomato']];
console.log(tomato);

var obj = {
    name: 'Felipe',
    props: {
        age: 25,
        favoriteColors: ['Black', 'Blue']
    }
}

var { name, props: { age: ageClient, favoriteColors: [color1, color2] }} = obj;
console.log(name, ageClient, color1, color2);

var fruit = [{name: 'Maça'}];
var [{ name: favoritFruit }] = fruit;
console.log(favoritFruit); 

function sum([a, b] = [50, 50])
{
    return a + b;
}
console.log(sum());

function sum2({a, b})
{
    return a + b;
}
console.log(sum2({a: 5, b: 5}));