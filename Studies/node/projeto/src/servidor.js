const porta = 3003

const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados') 

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.bady.name,
        preco: req.bady.preco
    })
    res.send(produto) //JSON
})

app.listen(porta, () => {
    console.log(`Servidor funcionando na porta ${porta}`)
})