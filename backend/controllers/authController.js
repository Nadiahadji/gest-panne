const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.login = (req, res, next) => {
    const email = req.body.email
    const password = req.body.password
    let loadedUser
    User.findOne({where : {email : email}})
        .then(user => {
            if(!user) {
                return res.status(403).json({message : "user invalid"})
                // const error = new Error('user invalid.');
                // error.statusCode = 401;
                // throw error;
            }
            loadedUser = user
            return bcrypt.compare(password, user.password)
        })
        .then(isEqual => {
            if(!isEqual) {
                return res.status(403).json({message : "password invalid"})
                // const error = new Error('password invalid!');
                // error.statusCode = 401;
                // throw error;
            }
        }).then(() => {
            
            if(!loadedUser.isActive) {
                return res.status(401).json({message : "Contactez l'administrateur ..."})
            }
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
            // const error = new Error(err)
            // error.codeStatus = 422
            // throw error
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        })
}
