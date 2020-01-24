const usuario = {
    nome: 'Felipe D. santos',
    idade: 24,
    endereco: {
        cidade: 'Vitoria da conquista',
        uf: 'BA'
    }
}

console.log(usuario);

const {nome, idade, endereco: {cidade}} = usuario;
console.log(`Nome: ${nome} / Idade: ${idade} / Endereço: ${cidade}`);

function mostraNome({nome, idade}){
    console.log(nome, idade);
}
mostraNome(usuario);