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
const TroubleDetail = require("./models/troubleDetail")
const Job = require('./models/job')
const User = require('./models/user')
const Notification = require('./models/notification')
const NotfDetail = require('./models/notfDetails')


app.use(cors())
app.use(bodyParser.json())


app.use('/api', router)


//associations
Eq.belongsTo(Site)
Trouble.belongsTo(User)
Trouble.belongsTo(Eq)
Job.belongsTo(User)
Job.belongsTo(Trouble)
Trouble.hasMany(TroubleDetail)
User.belongsToMany(Notification, { through: NotfDetail });
Notification.belongsToMany(User, { through: NotfDetail });

sequelize.sync({ altr : true })//{ force : true}
    .then(
        res => {
            app.listen(3000)
        }
    ).catch(
        err => console.log(err)
    )

