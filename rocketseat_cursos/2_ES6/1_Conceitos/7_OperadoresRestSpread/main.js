//REST
const usuario = {
    nome: 'Felipe D. santos',
    idade: 24,
    empresa: 'Autonomo'
}

const {nome, ...resto} = usuario;
console.log(nome);
console.log(resto);

const arr = [1,2,3,4,5,6];

const [a,b, ...c] = arr;
console.log(a);
console.log(b);
console.log(c);

function soma(...params){
    return params.reduce((total , next) => total + next);
}
console.log(soma(1,2,5));

//SPREAD
const arr1 = [1,2,3];

const arr2 = [4,5,6];

const arr3 = [...arr1, ...arr2];
console.log(arr3);

const usuario1 = {
    nome: 'Felipe',
    idade: 23,
    empresa: 'Autonomo'
};

const usuario2 = {...usuario1, nome: 'Marcella'};
console.log(usuario2);