const Job = require('../models/job')
const User = require('../models/user')
const Trouble = require('../models/trouble')
const sequelize = require('sequelize')

exports.index = (req, res, next) => {
    const currentPage = req.query.pqge || 1
    const perPage = 8
    const filter = req.query.filter
    const Op = sequelize.Op

    Job.findAndCountAll({
        include : [User, Trouble],
        attributes : [
            'id',
            'title',
            'desc',
            [sequelize.fn('date_format', sequelize.col('jobs.createdAt'), '%d-%m-%Y %H:%i:%s'), 'createdAt']
        ],
        where : {title : {
            [Op.like] : `${filter}%`
        }},
        limit : perPage,
        setoff : (currentPage - 1) * perPage,
        order : [
            ["id", "DESC"]
        ]
    })
    .then(jobs => {
        res.status(200).json(jobs)
    })
    .catch(err => console.log(err))
}


exports.getJob = (req, res, next) => {
    const id = req.params.id

    Job.findByPk(id)
        .then(job => res.status(200).json(job))
        .catch(err => console.log(err))
}

exports.storeJob = (req, res, next) => {
    const job = {
        title : req.body.title,
        desc : req.body.desc,
        userId : req.body.userId,
        troubleId : req.body.troubleId
    }
    Job.create(job)
        .then(result => (
            res.status(201).json({message : "job created"})
        ))
        .catch(err => console.log(err))

}


exports.updateJob = (req, res, next) => {
    const id = req.params.id

    Job.findByPk(id)
        .then(job => {
            job.title = req.body.title
            job.desc = req.body.desc
            job.userId = req.body.userId
            job.troubleId = req.body.troubleId
            return job.save()
        })
        .then(result => res.status(200).json({message : "job updated"}))
        .catch(err => console.log(err))
}


exports.deleteJob = (req, res, next) => {
    const id =req.params.id

    Job.findByPk(id)
        .then(job => {
            job.destroy()
            res.status(200).json({
                message : "job deleted"
            })
        })
        .catch(err => console.log(err))
}