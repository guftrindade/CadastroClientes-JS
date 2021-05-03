const Sequelize = require('sequelize')

//Conexão com o Banco de Dados MySQL
const sequelize = new Sequelize('cadastrocliente_js', 'root', 'lburguerm59',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}