const db = require('./db')

//Criando a tabela
const Post = db.sequelize.define('cadastroClientes_JS',{
    nomePessoa: {
        type: db.Sequelize.STRING
    },
    DtaNascimento: {
        type: db.Sequelize.DATE
    },
    CPF: {
        type: db.Sequelize.STRING
    },
    Endereco: {
        type: db.Sequelize.TEXT
    },
    Telefone: {
        type: db.Sequelize.STRING
    },
    Email: {
        type: db.Sequelize.STRING
    }
})

//Post.sync({force:true})
module.exports = Post