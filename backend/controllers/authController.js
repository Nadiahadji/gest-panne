const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.login = (req, res, next) => {
    const email = req.body.email
    const password = req.body.password
    let loadedUser
    User.findOne({email : email})
        .then(user => {
            if(!user) {
                return res.status(401).json({message : "user invalid"})
            }
            loadedUser = user
            return bcrypt.compare(password, user.password)
        })
        .then(isEqual => {
            if(!isEqual) (
                res.status(401).json({message : "password invalid"})
            )
            const token = jwt.sign({ 
                email : loadedUser.email, 
                id : loadedUser.id,
                role : loadedUser.role
                },
                "secretprivatekey",
                { expiresIn : "1h"}
            )
            res.status(200).json({
            	token : token,
            	id : loadedUser.id,
            })
        })
        .catch(err => {
            console.log(err)
            next()
        })
}
