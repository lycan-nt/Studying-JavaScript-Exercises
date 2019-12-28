//Novo recurso ES2015

const pessoa = {

    nome: 'Felipe',
    idade: 30,

    endereco: {

        logradouro: 'Rua ABC',
        numero: 564

    }
    
}

const {nome, idade} = pessoa
console.log(nome,idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const {endereco: {logradouro, numero, cep} } = pessoa
console.log(logradouro, numero, cep)