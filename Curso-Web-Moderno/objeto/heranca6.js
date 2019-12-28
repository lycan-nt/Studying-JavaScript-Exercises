function aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new aula('Bem Vindo', 123)
const aula2 = new aula('Ate mais', 456)
console.log(aula1, aula2)

//Simular o operador new
function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params) 
    return obj
}

const aula3 = novo(aula, 'Bem vindo', 123)
const aula4 = novo(aula, 'Ate mais',456)
console.log(aula3, aula4)

