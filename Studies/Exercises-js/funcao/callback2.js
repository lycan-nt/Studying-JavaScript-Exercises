const notas = [7.7, 5.5, 8.0, 10, 6.6, 3, 9.5]

//Sem callback
let notasBaixas = []
for(let i in notas) {
    if( notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

const notasBaixa2 = notas.filter(function (notas) {
    return notas < 7
})

console.log(notasBaixa2)

const notaBaixa3 = notas.filter(nota => nota < 7)
console.log(notaBaixa3)