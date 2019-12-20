// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preço: 1.99, tag: 'Promoção'
})

console.log('Extensivel:', Object.isExtensible(produto))
produto.nome = 'Boracha'
produto.descricao = 'Borracha escolar'
delete produto.tag
console.log(produto)

// Object.seal
const pessoa = {nome: 'Maria', idade: 50}
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome 
pessoa.idade = 30
console.log(pessoa)

