const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando o app
const app = express();

//Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi2', 
{ useNewUrlParser: true,
useUnifiedTopology: true  }
);
requireDir('./src/models');

const Product = mongoose.model('Product');


//Primeira rota
app.get('/', (req, res) => {
    Product.create({
        title: 'Hello World',
        description: 'NextDev Rumo ao proximo nivel',
        url: 'lycan.felipe@gmail.com',
    });
    
    return res.send('Hello World!');
});





app.listen(3001);