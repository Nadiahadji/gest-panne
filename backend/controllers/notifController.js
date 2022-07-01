const notification = require('../models/notification')
const notfDetail = require('../models/notfDetails')
const User = require('../models/user')
const { Sequelize, Op } = require('sequelize')

exports.allNotifications = (req, res, next) => {
    notification.findAll({
        include : [User],
        order : [['id', 'DESC']],
        attributes : [
            'id',
            'message',
            'users.notfDetails.isRead',
            [Sequelize.fn('date_format', Sequelize.col('notifications.createdAt'), '%d-%m-%Y'), 'createdAt']
        ]
    }).then(result => {
        res.status(200).json(result)
    }).catch(err => console.log(err))
} 

exports.addNotification = (req, res, next) => {
    const message = req.body.note
    notification.create({
        message
    }).then(() => res.status(201).json({ message : "new notification"}))
    .catch(err => console.log(err))

}