console.log('Hello World');

class Default{
    texto: string;
    numero: number;
    qualquer: any;
    boleano: boolean;
    array = [];
    
    constructor(){
        this.methodo();
    }

    methodo(){
        this.numero = 10;
        this.texto = `TypeScript ${this.numero}`
        return alert(this.texto);
    }
}