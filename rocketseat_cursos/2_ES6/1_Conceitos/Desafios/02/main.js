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