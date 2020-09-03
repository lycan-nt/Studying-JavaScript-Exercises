var Default = /** @class */ (function () {
    function Default() {
        this.metodo();
        this.array = [
            {
                teste: "teste"
            }
        ];
    }
    Default.prototype.metodo = function () {
        this.numero = 10;
        this.texto = "Este e um alert simples em typescript";
        return alert(this.texto);
    };
    return Default;
}());
