const time = new Set()
time.add('Vasco')
time.add('São Paulo').add('Flamengo')
time.add('Palmeiras')

console.log(time)
console.log(time.size)
console.log(time.has('Vasco'))
time.delete('Flamengo')
console.log(time.has('Flamengo'))

const nomes = ['Felipe', 'Marcella', 'Yuno', 'Floop']
const nomesSet = new Set(nomes)
console.log(nomesSet)