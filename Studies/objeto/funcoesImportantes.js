const pessoa = {
    nome: 'Rebeca',
    idade: 13,
    peso: 50
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)

})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '02/10/1995'
})

pessoa.dataNascimento = '10/10/1010'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assing (ECMAScript 2015)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3}
const obj = Object.assign(dest, o1,o2)
console.log(dest)