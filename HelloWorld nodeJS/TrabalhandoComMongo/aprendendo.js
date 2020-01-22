const mongoose = require('mongoose');

//Configurando o mongoose
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/aprendendo", {
    useMongoClient: true
})
    .then(() => console.log('Conectado com sucesso'))
    .catch((erro) => console.log('Falaha ao conectar' + erro));