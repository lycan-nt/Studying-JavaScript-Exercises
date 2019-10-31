function rand({mim = 0, max = 1000}){

    const valor = Math.random() * (max - mim) + mim
    return Math.floor(valor)

}

const obj = { max: 50, mim: 40}
console.log(rand(obj))
console.log(rand({mim: 800}))
console.log(rand({}))