const arr = [1,2,3,4,5];

const t = arr.map((item) => item + 10);
console.log(t);

//---------------------------------------

const usuario = {nome: 'Felipe ', idade: 24};

const  mostraIdade = (usuario) => usuario.idade;
console.log(mostraIdade(usuario));

//------------------------------------------

const nome = 'Felipe D. Santos';
const idade = 24;

const mostraUsuario = (nome = 'Marcella', idade = 23) => {
    return {nome, idade}
};

console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));

//------------------------------------------------

const promise = () => {
    return new Promise((resolve, reject) => {
        return resolve();
    });
}

