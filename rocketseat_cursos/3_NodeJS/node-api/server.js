const express = require('express');
const mongoose = require('mongoose');

//Iniciando o app
const app = express();

//Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', 
{ useNewUrlParser: true,
useUnifiedTopology: true  });


//{ useUnifiedTopology: true });
// {useNewUrlParser: true}

//Primeira rota
app.get('/', (req, res) => {
    res.send('Hello World!');
});





app.listen(3001);