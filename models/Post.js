const db = require('./db')

//Criando a tabela
const Post = db.sequelize.define('Pessoa',{
    IdPessoa:{
        type:db.Sequelize.NUMBER,
        primaryKey:true, 
        autoIncrement:true
    },
    NomePessoa: {
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
}, {
    timestamps: false, // Removendo createdAt e updatedAt
    tableName:'Pessoa' // Nome da tabela cadastrado no banco de dados
});

//Post.sync({force:true})
module.exports = Post