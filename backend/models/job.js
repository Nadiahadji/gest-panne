const Sequelize = require('sequelize')
const sequelize = require('../config/config')

const Job = sequelize.define('jobs', {
    title : {
        type : Sequelize.STRING
    },
    desc : {
        type : Sequelize.STRING
    }
})

module.exports= Job