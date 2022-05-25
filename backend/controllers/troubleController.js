
const Trouble = require('../models/trouble')
const User = require('../models/user')
const TroubleDetail = require('../models/troubleDetail')
const sequelize = require('sequelize')

exports.index = (req, res, next) => {
    const currentPage = req.query.page || 1
    const filter = req.query.filter || ""
    const perPage = 8
    const Op = sequelize.Op
    Trouble.findAndCountAll({
        include : [User, TroubleDetail],
        attributes: [
                    'id',
                    'title',
                    'status',
                    [sequelize.fn('date_format', sequelize.col('troubles.createdAt'),'%d-%m-%Y %H:%i:%s'),
                    'createdAt']
                ],
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
    Trouble.findAll({
        where : {id : id},
        include : [User, TroubleDetail],
        attributes: [
            'id',
            'title',
            'status',
            [sequelize.fn('date_format', sequelize.col('troubles.createdAt'),'%d-%m-%Y %H:%i:%s'),
            'createdAt'],
            [sequelize.fn('date_format', sequelize.col('troubles.updatedAt'),'%d-%m-%Y %H:%i:%s'),
            'updatedAt']
        ],
    })
        .then(trouble => res.status(200).json(trouble))
        .catch(err => console.log(err))
}

exports.storeTrouble = (req, res, next) => {
    
    const trouble = {
        title : req.body.title,
        status : req.body.status,
        userId : req.body.userId
    }
    Trouble.create(trouble)
            .then(result => {
                const details = {
                    comment : req.body.desc,
                    troubleId : result.id
                }
                TroubleDetail.create(details).then(r =>{
                    res.status(201).json({message : "New trouble created"})
                })
            })
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

exports.addDetails = (req, res, next) => {
    const detail = {
        troubleId : req.body.troubleId,
        comment : req.body.desc
    }
    TroubleDetail.create(detail).then(result => res.status(201).json({message : "detail added"}))
}