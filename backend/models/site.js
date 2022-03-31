const Sequelize = require('sequelize')

const sequelize = require('../config/config')

const Site = sequelize.define('sites', {
    site_name : {
        type : Sequelize.STRING,
        allowNull : false
    },
    site_location: {
        type : Sequelize.STRING,
        allowNull : false
    }
});

module.exports = Site