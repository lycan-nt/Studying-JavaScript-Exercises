const mongoose = require('mongoose');

//Configurando o mongoose
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/aprendendo", {
    useMongoClient: true
})
    .then(() => console.log('Conectado com sucesso'))
    .catch((erro) => console.log('Falaha ao conectar' + erro));

//Model - Usúarios
//Definindo o model

const UsuarioSchema = mongoose.Schema({
    nome: {
        type: String,
        require: true
    },

    sobrenome: {
        type: String,
        require: true
    },

    email: {
        type: String,
        require: true
    },

    idade: {
        type: Number,
        require: true
    },

    pais: {
        type: String
    }
});

mongoose.model('usuarios', UsuarioSchema);

const user = mongoose.model('usuarios');

new user({
    nome: 'Felipe ',
    sobrenome: 'D. santos',
    email: 'lycan.felipe@gmail.com',
    idade: 24,
    pais: 'Brasil'

}).save()
        .then(() => console.log('Novo usúario cadastrado!'))
        .catch((erro) => console.log('Falha ao cadastrar novo usúario: ' + erro));