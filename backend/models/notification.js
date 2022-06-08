const Sequelize = require('sequelize')
const sequelize = require('../config/config')

const Notification = sequelize.define('notifications', {
    message : {
        type : Sequelize.STRING
    },
})

module.exports = Notification