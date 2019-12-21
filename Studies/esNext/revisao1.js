//let e const

{

    var a = 2
    let b = 2

}

console.log(a)
//console.log(b)

//Template String
const produto = 'Ipad'
console.log(`${produto} ta caro!`)

//Destructuring
const [l,e, ...tras] = 'cod3r'
console.log(l,e,tras)

const [x,y] = [1,2]
console.log(x,y)

const {nome, idade} = {nome: 'Ana', idade: 19}
console.log(nome, idade)
