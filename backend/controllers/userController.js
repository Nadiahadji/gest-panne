const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


exports.index = (req, res, next) => {
    User.findAll()
        .then(users => res.status(200).json(users))
        .catch(err => console.log(err))
}

exports.getUser = (req, res, next) => {
    const user_id = req.params.id
    User.findOne({where : {id : user_id}})
        .then(user => res.status(200).json(user))
        .catch(err => console.log(err))
}


exports.storeUser = (req, res, next) => {
    const password = req.body.password
    bcrypt.hash(password, 12)
        .then(passhasn => {
            const user = {
                fullName : req.body.fullname,
                email : req.body.email,
                password : passhasn,
                role : req.body.role,
                isActive : req.body.isActive
            }
            return User.create(user)
        })
        .then(result => {
            res.status(201).json({
                message : "New user created"
            })
        })
        .catch(err => console.log(err))
}

exports.updateUser = (req, res, next) => {
    const id = req.params.id
    User.findByPk(id)
        .then(user => {
            user.fullName = req.body.fullname
            user.email = req.body.email
            user.role = req.body.role
            user.isActive = req.body.isActive
            return user.save()
        })
        .then(result => res.status(200).json({message : `user ${result.fullName} updated`}))
        .catch(err => console.log(err))
}
