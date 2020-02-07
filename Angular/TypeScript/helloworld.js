console.log('Hello World');
var Default = /** @class */ (function () {
    function Default() {
        this.array = [];
        this.methodo();
    }
    Default.prototype.methodo = function () {
        this.numero = 10;
        this.texto = "TypeScript " + this.numero;
        return alert(this.texto);
    };
    return Default;
}());
