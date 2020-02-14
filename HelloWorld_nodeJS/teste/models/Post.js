const db = require('./db')

const Post = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRING
    },

    conteudo: {
        type: db.Sequelize.TEXT
           
        
    }
})

//Post.sync({force: true})  //  => Apenas usada para postar no banco de dados

module.exports = Post;