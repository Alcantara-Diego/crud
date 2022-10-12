const Sequelize = require('sequelize');

// Conection with the mysql database
const sequelize = new Sequelize('usuarios', 'root', '123456', {
    host: "localhost",
    dialect: 'mysql'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}