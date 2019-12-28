const nota = [10, 9.5, 7, 6.5, 5]

for( let i in nota) {
    console.log(i, nota[i])
}

const pessoa = {
    nome: 'Felipe',
    sobrenome: 'D. Santos',
    idade: 25,
    peso: 60
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}