let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = (a) => 2 * a // Return implicito
console.log(Math.PI)

let ola = function () {
    return 'Olá'
}

console.log(ola())

ola = () => 'ola'
console.log(ola())