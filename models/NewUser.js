const db = require('./db')


const Usuarios = db.sequelize.define('usuarios', {
    nome: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    },
    telefone: {
        type: db.Sequelize.INTEGER
    },
    linguagem: {
        type: db.Sequelize.STRING
    },
    tipodeusuario: {
        type: db.Sequelize.STRING
    },
    stack: {
        type: db.Sequelize.STRING
    }
})

module.exports = Usuarios;
