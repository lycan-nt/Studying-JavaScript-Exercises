const express = require('express');
const mongoose = require('mongoose');

//Iniciando o app
const app = express();

//Iniciando o DB
mongoose.connect()

//Primeira rota
app.get('/', (req, res) => {
    res.send('Hello World!');
});





app.listen(1010);