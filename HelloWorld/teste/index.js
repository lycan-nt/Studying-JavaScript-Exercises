const express = require("express")

const app = express()

app.get('/', function(req, res){
    res.send('Hello World!!')
})

app.get('/sobre', function(req, res){
    res.send('Bem vindo ao meu app!!')
})

app.get('/contato', function(req, res){
    res.send('Contatos@contatos.com')
})





app.listen(8080, function() {
    console.log('Server online!')
})