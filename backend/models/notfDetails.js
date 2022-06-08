const Sequelize = require('sequelize')
const sequelize = require('../config/config')

const NotfDetail = sequelize.define('notfDetails', {
    isRead : {
        type : Sequelize.BOOLEAN
    },
})

module.exports = NotfDetail