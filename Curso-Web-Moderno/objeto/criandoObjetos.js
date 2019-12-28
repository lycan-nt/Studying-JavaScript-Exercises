//Usando a notação literal
const obj1 = {}
console.log(obj1)

//Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2) 

//Funções construtoras
function produto(nome, preco, desc){
    this.nome = nome
    this.getComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new produto('NoteBook', 2000, 0,25)
const p2 = new produto('Cadeira Gamer', 350, 0.15)
console.log(p1.getComDesconto(), p2.getComDesconto())

//Função factory
function criarFuncionario(nome, salarioBase, falta){
    return{
        nome,
        salarioBase,
        falta,
        getSalario(){
            return (salarioBase / 30) * (30 - falta)
        }
    }
}

const f1 = criarFuncionario('Felipe', 3000, 2)
const f2 = criarFuncionario('Marcella', 2500, 1)
console.log(f1.getSalario())
console.log(f2.getSalario())

//Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//Uma função famosa que retorna um Objeto
const fromJSON = JSON.parse('{"info": "teste"}')
console.log(fromJSON.info)