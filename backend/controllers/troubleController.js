
const Trouble = require('../models/trouble')
const User = require('../models/user')
const sequelize = require('sequelize')

exports.index = (req, res, next) => {
    const currentPage = req.query.page || 1
    const filter = req.query.filter || ""
    const perPage = 8
    const Op = sequelize.Op
    Trouble.findAndCountAll({
        include : User,
        where : {title : {
            [Op.like] : `${filter}%`
        }},
        setoff : (currentPage - 1) * perPage,
        limit : perPage,
        order : [
            ["id" , "DESC"]
        ]
    })
    .then(troubles => {
        console.log(troubles)
        res.status(200).json(troubles)
    })
    .catch(err => console.log(err))
}

exports.getTrouble = (req, res, next) => {
    const id = req.params.id
    Trouble.findByPk(id)
        .then(trouble => res.status(200).json(trouble))
        .catch(err => console.log(err))
}

exports.storeTrouble = (req, res, next) => {
    const trouble = {
        title : req.body.title,
        desc : req.body.desc,
        status : req.body.status,
        userId : req.body.userId
    }
    Trouble.create(trouble)
            .then(result => res.status(201).json({message : "New trouble created"}))
            .catch(err => console.log(err))

}

exports.updateTrouble= (req, res, next) => {
    const id = req.params.id
    Trouble.findByPk(id)
            .then(trouble => {
                trouble.title = req.body.title
                trouble.status = req.body.status
                trouble.desc= req.body.desc
                trouble.save()
                res.status(200).json({
                    message : "trouble updated"
                }) 
             })
            .catch(err => console.log(err))
}

exports.deleteTrouble = (req, res, next) => {
    const id = req.params.id

    Trouble.findByPk(id)
        .then(trouble => {
            trouble.destroy()
            res.status(200).json({
                message : "trouble deleted"
            })
        })
        .catch(err => console.log(err))
}