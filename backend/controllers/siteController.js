
const Site = require('../models/site')
const { Op } = require('sequelize')

exports.index = (req, res, next) => {
    // Site.findAll()
    //     .then(sites => res.status(200).json(sites))
    //     .catch(err => console.log(err))
    //const Op = Sequelize.Op
    const currentPage = req.query.page || 1
    const perPage = 8
    const siteName = req.query.site || ""
    Site.findAndCountAll({
        where : { "site_name" : {
                [Op.like] : `${siteName}%`
            }
        },
        offset : (currentPage - 1 ) * perPage,
        limit : perPage,
        order : [
            ["id", "DESC"]
        ]
    }).then((result) => {
        res.status(200).json(result)
    }).catch(err => console.log(err))
}

exports.getSite = (req, res, next) => {
    const siteId = req.params.id
    // Site.findAll({where : { id : siteId }})
    Site.findByPk(siteId)
        .then(site => res.status(200).json(site))
        .catch(err => console.log(err))
}

exports.findSite = (req, res, next) => {

}

exports.storeSite = (req, res, next) => {
    const site = { 
        site_name : req.body.name,
        site_location : req.body.location
    }
    Site.create(site)
        .then(result => {
            console.log(result)
            res.status(200).json({"message" : "done!"})
        })
        .catch(err => console.log(err))
    
}

exports.updateSite = (req,res,next) => {
    const siteid = req.params.id
    
    Site.findOne({where : { id : siteid}})
        .then(site => {
            site.site_name = req.body.name
            site.site_location = req.body.location
            site.save()
            res.status(201).json(site)
        })
        .catch(err => console.log(err))
}

exports.destroySite = (req, res, next) => {
    const siteId = req.params.id
    Site.findOne({where : {id : siteId}})
        .then(site => {
            site.destroy()
        })
        .then(result => res.status(200).json({"message" : "site deleted"}))
        .catch(err => console.log(err))
}