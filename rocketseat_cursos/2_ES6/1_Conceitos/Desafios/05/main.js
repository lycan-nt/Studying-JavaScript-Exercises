                                //REST
const  arr = [1,2,3,4,5,6];

const [ x,...y] = arr
console.log(x);
console.log(y);

//----------------------------------

function soma(...params){
    return params.reduce((total, next) => total + next)
}

console.log(soma(1,5,6));
console.log(soma(5,5,5,5,5));

                            //SPREAD

const usuario = {
    nome: 'Felipe D. Santos',
    endereco: {
        estado: 'Bahia',
        cidade: 'VDC'
    }
}

const usuario2 = {...usuario, nome: 'Marcella'};
console.log(usuario2);

const usuario3 = {...usuario, endereco: {cidade:'Barra'}};
console.log(usuario3);

//-----------------------------------------------

const nome = 'Felipe D. Santos';
const idade = 24;

console.log(`O usuario: ${nome} tem ${idade} anos`);

const nome1 = 'Diego';
const idade1 = 23;
const usuariot = {
 nome1,
 idade1,
 cidade: 'Rio do Sul',
};
console.log(usuariot);