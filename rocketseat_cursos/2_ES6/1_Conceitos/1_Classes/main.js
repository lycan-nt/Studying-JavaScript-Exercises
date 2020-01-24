class List{
    constructor(){
        this.data = [];
    }

    add(data){
        this.data.push('data');
        console.log(data);
    }
}

class TudoList extends List{
    constructor(){
        super();

        this.usuario = 'Diego'
    }

    mostrarUsuario(){
        console.log(this.usuario);
    }

}

const minhaLista = new TudoList();

document.getElementById('novotodo').onclick = function () {
    minhaLista.add('21/01/2020');
}

minhaLista.mostrarUsuario();

class Matematica{
    static soma(a,b){
        return a + b;
    }
}

console.log(Matematica.soma(1,2));