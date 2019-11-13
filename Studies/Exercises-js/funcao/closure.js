//Closure é o escopo criando quando uma funação é declarada
//Esse escopo permite a função acessar e manipular variáveis externas a função

//Contexto Léxico em ação

const x = 'Global'

function fora() {
    const x = 'local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())