const Sequelize = require('sequelize')

const sequelize = require('../database/db')

const Site = sequelize.define('sites', {
    site_id : {
        type : Sequelize.INTEGER,
        allowNull : false,
        autoincrement : true,
        primaaryKey : true,

    },
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