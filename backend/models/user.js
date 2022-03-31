const Sequelize = require('sequelize')
const sequelize = require('../config/config')

const User = sequelize.define('users', {
    fullName : {
        type : Sequelize.STRING
    },
    email : {
        type : Sequelize.STRING
    },
    password : {
        type : Sequelize.STRING
    },
    role : {
        type : Sequelize.STRING
    },
    isActive : {
        type : Sequelize.BOOLEAN,
        defaultValue : false
    }
});

module.exports = User