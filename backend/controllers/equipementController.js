const Eq = require('../models/equipment')


exports.index = (req, res, next) => {
    Eq.findAll()
        .then(eq => {
            res.status(200).json(eq)
        })
        .catch(
            err => console.log(err)
        )
}

exports.getEquipement = (req, res, next) => {
    const id = req.params.id
    Eq.findByPk(id)
        .then(eq => res.status(200).json(eq))
        .catch(err => console.log(err))
} 

exports.storeEq = (req, res, next) => {
    const eq = {
        Mid : req.body.mid,
        name : req.body.name,
        desc : req.body.desc,
        eq_type : req.body.type,
        siteId : req.body.siteId,
    }
    Eq.create(eq)
        .then(result => {
            console.log(result)
            res.status(201).json({
                message : "New equipement added with success"
            })
        })
        .catch(err => console.log(err))
} 


exports.updateEq = (req, res, next) => {
    const id = req.params.id
    Eq.findByPk(id)
        .then(eq => {
            eq.Mid = req.body.mid
            eq.name = req.body.name
            eq.desc = req.body.desc
            eq.eq_type = req.body.type
            eq.siteId = req.body.siteId
            eq.save()
            res.status(200).json({
                message : `eauipement ${eq.name} was updated`
            })
    })
    .catch(err => console.log(err))
}

exports.deleteEq = (req, res, next) => {
    const id = req.params.id
    Eq.findByPk(id)
        .then(eq => {
            eq.destroy()
            res.status(200).json({
                message : "Eauipement deleted"
            })
        })
        .catch(err => console.log(err))
}