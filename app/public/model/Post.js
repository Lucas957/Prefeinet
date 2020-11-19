const { sequelize } = require('./db');
const db = require('./db');

const post = sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
})

const cad = sequelize.define('cad', {
    nome: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    },
    senha: {
        type: db.Sequelize.STRING
    }
})

module.exports = {
    post: post,
    cad: cad
}