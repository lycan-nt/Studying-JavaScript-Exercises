const empresa = {
    nome: 'RocktSeat',
    endereco: {
        estado: 'São paulo',
        cidade: 'São paulo'
    }
};

let nome = {...empresa}.nome;
console.log(nome);

let estado = {...empresa.endereco}.estado;
console.log(estado);

let cidade = {...empresa.endereco}.cidade;
console.log(cidade);