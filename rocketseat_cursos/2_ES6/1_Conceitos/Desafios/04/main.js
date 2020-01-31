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

//---------------------------------------------------

function mostraInfo(usuario){
   let nome = {...usuario}.nome;
   let idade = {...usuario}.idade;
    return `${nome} tem ${idade} anos`;
};
console.log(mostraInfo({nome: 'Felipe D. Santos', idade: 24}));
