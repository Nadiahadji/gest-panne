
const Trouble = require('../models/trouble')


exports.index = (req, res, next) => {
    const troubles = Trouble.findAll()
    res.status(200).json(troubles)
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
                Trouble.title = req.body.title
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