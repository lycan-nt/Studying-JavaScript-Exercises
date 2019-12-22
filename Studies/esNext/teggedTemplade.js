//Tegged templade - processar o templade dentro de uma função
function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}

const aluno = 'Marcella'
const situacao = 'Aprovado'
console.log(tag `${aluno} esta ${situacao}`)

