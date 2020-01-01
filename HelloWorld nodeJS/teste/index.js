const express = require("express")

const app = express()

app.get('/', function(req, res){
    res.sendFile(__dirname + "/html/index.html")
})

app.get('/sobre', function(req, res){
    res.sendFile(__dirname + "/html/sobre.html")
})

app.get('/contato', function(req, res){
    res.send('Contatos@contatos.com')
})


app.get('/ola/:cargo/:nome', function(req, res) {
    res.send("<h1>Bem vindo, " + req.params.nome + "!</h1>" + "<h2> Seu cargo e: " + req.params.cargo + ". <h2>")
    
})



app.listen(8080, function() {
    console.log('Server online!')
})