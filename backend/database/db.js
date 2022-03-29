const Sequelize = require('sequelize')
const sequelize = new Sequelize('appdb', 'raouf', '', {
    dialect : 'mysql',
    host: 'localhost'
})


module.exports = sequelize;