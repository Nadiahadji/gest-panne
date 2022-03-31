const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')

const app = express()

const router = require('./routes')
const sequelize = require('./config/config.js')
const Site = require('./models/site')
const Eq = require('./models/equipment')

app.use(bodyParser.json())


app.use('/api', router)

Eq.belongsTo(Site)

sequelize.sync({ force : true})
    .then(
        res => {
            app.listen(3000)
        }
    ).catch(
        err => console.log(err)
    )

