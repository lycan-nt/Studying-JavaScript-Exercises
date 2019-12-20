//Criar de forma literal
function fun1() { }

//Armazenar em uma variavel
const fun2 = function() { }

//Armazenar em um array
const array = [function (a, b){return a + b}, fun1, fun2]
console.log(array[0](5,5))

//Armazenar em um atributo de objeto
const obj = { }
obj.falar = function() { return 'Opa'}
console.log(obj.falar())

//passando função como parametro
function run(fun){
    fun()
}

run(function(){console.log('Execultando...')})

//Uma função pode retornar/conter outra função
function soma(a,b) {
    return function (c)  {
        console.log(a + b + c)
    }
}

soma(5,10)(4)
const teste = soma(53,5)
teste(5)