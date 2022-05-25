const Sequelize = require('sequelize')
const sequelize = require('../config/config')

const TroubleDetail = sequelize.define('troubleDetails', {
    comment : {
        type : Sequelize.STRING
    }
})

module.exports = TroubleDetail