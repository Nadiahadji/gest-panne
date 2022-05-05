const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const cors = require('cors')

const app = express()

const router = require('./routes')
const sequelize = require('./config/config.js')
const Site = require('./models/site')
const Eq = require('./models/equipment')
const Trouble = require("./models/trouble")
const Job = require('./models/job')
const User = require('./models/user')


app.use(cors())
app.use(bodyParser.json())


app.use('/api', router)


//associations
Eq.belongsTo(Site)
Trouble.belongsTo(User)
Job.belongsTo(User)
Job.belongsTo(Trouble)


sequelize.sync()//{ force : true}
    .then(
        res => {
            app.listen(3000)
        }
    ).catch(
        err => console.log(err)
    )

