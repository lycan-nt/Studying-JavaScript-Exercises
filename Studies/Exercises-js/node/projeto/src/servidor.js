const porta = 3003

const express = require('express')
const app = express()

app.get('/produtos', (req, res, next) => {
    res.send({nome: 'NootBook', preco: 123.5}) //Converte para JSON
})

app.listen(porta, () => {
    console.log(`Servidor funcionando na porta ${porta}`)
})