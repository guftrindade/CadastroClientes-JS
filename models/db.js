const Sequelize = require('sequelize')

//Conexão com o Banco de Dados MySQL
const sequelize = new Sequelize('CADASTROCLIENTE_JS', 'root', 'Mudar123',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}