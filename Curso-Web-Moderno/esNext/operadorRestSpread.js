//Usar spread com Objeto
const funcionario = {nome: 'Felipe', salario: 20.000}
const clone = {ativo: true, ...funcionario}
console.log(clone)

//usar spread como array
const grupoA = ['Maria','João','Pedro']
const grupoFinal = ['Felipe', ...grupoA]
console.log(grupoFinal)