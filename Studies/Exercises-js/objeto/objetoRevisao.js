//Coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['Marca do produto'] = 'Génerica'
produto.preco = 250

console.log(produto)
delete produto.preco
delete produto['Marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 5000,
    proprietario: {
        nome: 'Felipe',
        idade: 25,
        endereco: {
            logradouro: 'Avenida XYZ',
            numero: 5,
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19,
    },{
        nome: 'Ana',
        idade: 42

    }],

    calcularValorDoSeguro: function() {
        //....
    }

}

carro.proprietario.endereco.numero = 100
carro['proprietario']['endereco']['logradouro'] = 'teste'
console.log(carro)

//delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorDoSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)