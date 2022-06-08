const User = require('../models/user')
const bcrypt = require('bcryptjs')
const sequelize = require('sequelize')

exports.index = (req, res, next) => {
    const Op = sequelize.Op
    const currentPage = req.query.page || 1
    const perPage = 8
    const userName = req.query.filter || ""

    User.findAndCountAll({ 
        attributes: {exclude: ['password']},
        where : {
            "fullName" : {[Op.like] : `${userName}%`}
        },
        offset : (currentPage - 1) * perPage,
        limit : perPage,
        order : [
            ["id", "DESC"]
        ]                   
    })
        .then(users => {

            res.status(200).json(users)
        })
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
                fullName : req.body.fullName,
                email : req.body.email,
                password : passhasn,
                role : req.body.rule,
                isActive : req.body.isActive
            }
            return User.create(user)
        })
        .then(result => {
            res.status(201).json({
                message : "New user created"
            })
        })
        .catch(err => res.status(500).json({err : err}))
}

exports.updateUser = (req, res, next) => {
    const id = req.params.id
    console.log(id)
    User.findByPk(id)
        .then(async (user) => {
            user.fullName = req.body.fullName
            user.email = req.body.email
            user.role = req.body.role
            user.isActive = req.body.isActive
            let hashpass = await bcrypt.hash(req.body.password, 12)
            user.password = hashpass
    
            return user.save()
        })
        .then(result => res.status(200).json({message : `user ${result.fullName} updated`}))
        .catch(err => console.log(err))
}
