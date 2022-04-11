const Job = require('../models/job')


exports.index = (req, res, next) => {
    const jobs = Job.findAll()
    res.status(200).json(jobs)
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
        troubleId : req.body.trobleId
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
            job.troubleId = req.body/troubleId
            return job.save()
        })
        .then(result => res.status(200).json({message : "job updated"}))
        .catch(err => console.log(err))
}


exports.deleteJob = (req, res, next) => {
    const id =re.params.id

    Job.findByPk(id)
        .then(job => {
            job.destroy()
            res,status(200).json({
                message : "job deleted"
            })
        })
        .catch(err => console.log(err))
}