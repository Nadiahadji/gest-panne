const Sequelize = require('sequelize')
const sequelize = require('../config/config')

const Trouble = sequelize.define('troubles', {
    title : {
        type : Sequelize.STRING
    },
    desc : {
        type : Sequelize.STRING
    },
    status : {
        type : Sequelize.STRING,
        defaultValue : "En attente"
    }
})

module.exports = Trouble