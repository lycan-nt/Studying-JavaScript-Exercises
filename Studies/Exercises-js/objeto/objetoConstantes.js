// pessoa -> 123 -> {...}
const pessoa = {nome: 'Ana'}
pessoa.nome = 'Felipe'
console.log(pessoa)

//pessoa -> 456 -> {...}
//pessoa = {nome: 'Ana'}

//Congela o Objeto e seus atributos de forma que não e mais possivel alterar
Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua 10'
delete pessoa.nome
console.log(pessoa)

const objConstante = Object.freeze({nome: 'teste'})
objConstante.nome = 'Teste002'
console.log(objConstante)