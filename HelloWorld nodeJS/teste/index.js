const express = require("express")

const app = express()

const handlebars = require('express-handlebars')

const bodyParser = require('body-parser')

//config
    //Templade Engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')

    //Body Parser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())



//Rotas
app.get('/cad', function(req, res){
    res.render('formulario')
})

app.post('/add', function(req, res){
    
    res.send('Texto: ' + req.body.nome + ' Conteudo: ' + req.body.conteudo)
})

app.listen(8080, function() {
    console.log('Server online!')
})