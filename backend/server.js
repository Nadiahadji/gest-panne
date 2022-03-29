const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const adminRoute = require('./routes/admin')
const siteRoute = require('./routes/siteRoute')
const sequelize = require('./database/db')


app.use(bodyParser.json())


app.use('/sites', siteRoute)
app.use(adminRoute)

sequelize.sync()
    .then(
        res => {
            app.listen(3000)
        }
    ).catch(
        err => console.log(err)
    )

