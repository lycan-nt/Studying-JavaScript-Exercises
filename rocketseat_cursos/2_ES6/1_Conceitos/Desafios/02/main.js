const usuario = [
    {nome: 'Diego', idade: 23, empresa: 'RocktSeat'},
    {nome:'Gabriel' , idade: 15, empresa:'RocketSeat'},
    {nome: 'Lucas', idade: 30, empresa: 'RocktSeat'},
];

let idade = [];
idade = usuario.map((elem) => {
    return elem.idade
});

console.log(idade);

let maior18 = usuario.filter(function(elem){
    return elem.idade >= 18
} );
console.log(maior18);

let empresa = usuario.find((elem) =>{
    return elem.empresa === 'Google'
})
console.log(empresa);