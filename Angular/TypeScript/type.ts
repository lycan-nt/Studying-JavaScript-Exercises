let obj: {name: string, age: number, active?: boolean } = {
    name: 'Felipe',
    age: 25,
    active: true
}

let obj2: {[key: string] : any} = {
    name: 'Marcella',
    age: 24
}

function teste(nome: string , sobrenome?: string) {
    alert(nome + sobrenome);
}

teste('Felipe', 'Santos');