class Default {
    texto: string;
    numero: number;
    qualquer: any;
    booleano: boolean;
    array: any[];

    constructor() {
        this.metodo();

        this.array = [
            {
                teste: "teste"
            }
        ]
    }

    metodo() {
        this.numero = 10;
        this.texto = `Este e um alert simples em typescript`;
        return alert(this.texto);
    }
}