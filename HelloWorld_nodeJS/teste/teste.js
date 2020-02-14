const Sequelize = require('sequelize')
const sequelize = new Sequelize('test', 'root', '131216',{
    host: "localhost",
    dialect: "mysql"

})

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

Postagem.create({
    titulo: "Teste de titulo",
    conteudo: "Um conteudo qualquer"
})

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email:{
        type: Sequelize.STRING
    } 
})

Usuario.create({
    nome: "Felipe",
    sobrenome: "D. Sanots",
    idade: 24,
    email: "lycan.felipe@gmail.com"
})

