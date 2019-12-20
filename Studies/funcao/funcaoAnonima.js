const soma = function(x,y) {
    return x + y
}

const imprimirResultado = function(a,b, operacao = soma){
    console.log(operacao(a,b))
}

imprimirResultado(4,6)
imprimirResultado(4,6, soma)
imprimirResultado(6,4, function(x,y){
    return x - y
})

imprimirResultado(4,6, (x,y) => x * y)

const pessoa = {
    falar: function () {
        console.log('Olá')
    }
}

pessoa.falar()