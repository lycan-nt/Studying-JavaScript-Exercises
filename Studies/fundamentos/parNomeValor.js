const saudacao = 'Olá' //Contexto léxico 1

function exec(){

    const saudacao = 'Olá de novo'  //Contexto léxico 2
    return saudacao

}

//Objetos são grupos aninhados de pares nome/valor

const cliente = {

    nome: 'Felipe',
    idade: 24,
    peso: 60,

    endereco: {

        logradouro: 'Rua mato grosso',
        numero: 30

    }

}

console.log(saudacao)
console.log(exec())
console.log(cliente)