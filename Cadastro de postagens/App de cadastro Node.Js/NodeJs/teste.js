const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste', 'root', 'Guixx123@', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(function () {
    console.log('Conectado com sucesso')
}).catch(function (erro) {
    console.log('Falha ao se conectar: ' + erro)

})

const Postagem = sequelize.define('postagens', {
    título: {
        type: Sequelize.STRING    //STRING tem um tamanho limitado e TEXT não
    },
    conteudo: {
        type: Sequelize.TEXT
    }

})

Postagem.create({
    título: 'Titilo Qualquer',
    conteudo: 'CONTEUDO BLA BLA VLA'
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
    email: {
        type: Sequelize.STRING
    }
})

Usuario.create({
    nome: 'Ronaldo',
    sobrenome: 'José',
    idade: 22,
    email: 'dfgh@email.com'
})

//Usuario.sync({ force: true })