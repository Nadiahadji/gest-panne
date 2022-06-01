const Sequelize = require('sequelize')
const sequelize = require('../config/config')

const Job = sequelize.define('jobs', {
    title : {
        type : Sequelize.STRING
    },
    desc : {
        type : Sequelize.STRING
    },
    status : {
        type : Sequelize.BOOLEAN,
        defaultValue : false
    }
})

module.exports= Job