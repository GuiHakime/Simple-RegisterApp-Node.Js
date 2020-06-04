const Sequelize = require('sequelize')
// db é um arquivo específico para Conexão com o banco de dados MySql
const sequelize = new Sequelize('postapp', 'root', 'Guixx123@', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}