const Sequelize = require('sequelize')
const sequelize = require('../config/config.js')

const Equipement = sequelize.define('equipements', {
    Mid : {
        type : Sequelize.INTEGER
    },
    name : {
        type : Sequelize.STRING
    },
    desc : {
        type : Sequelize.STRING
    },
    eq_type : {
        type : Sequelize.STRING
    }
})

module.exports = Equipement