const express = require('express');

const router = express.Router();

const isAuth = require("../middleware/is-auth")

const siteController = require("../controllers/siteController")
const eqController = require("../controllers/equipementController")
const userController = require('../controllers/userController')
const troubleController = require('../controllers/troubleController')
const jobController = require('../controllers/jobController');
const authController = require('../controllers/authController')

//auth router
router.post('/login', authController.login)

//Site router
router.get('/sites', siteController.index)
router.post('/sites', siteController.index)
router.get('/site/:id', siteController.getSite)
router.post('/new-site', siteController.storeSite)
router.put('/edit-site/:id', siteController.updateSite)
router.delete('/delete-site/:id', siteController.destroySite)


//equipements router
router.get('/equipements', eqController.index)
router.get('/equipement/:id', eqController.getEquipement)
router.post('/new-equipement', eqController.storeEq)
router.put('/update-equipement/:id', eqController.updateEq)
router.delete('/delete-equipement/:id', eqController.deleteEq)


//users router
router.get('/users', userController.index)
router.get('/user/:id', userController.getUser)
router.post('/new-user', userController.storeUser)
router.put('/update-user/:id', userController.updateUser)
//router.delete('/delete-user/:id', userController.deleteUser)

//Trouble router
router.get('/troubles', troubleController.index)
router.get('/trouble/:id', troubleController.getTrouble)
router.post('/new-trouble', troubleController.storeTrouble)
router.put('/update-trouble/:id', troubleController.updateTrouble)
router.delete('.delete-trouble/:id', troubleController.deleteTrouble)

//Job router
router.get('/jobs', jobController.index)
router.get('/job/:id', jobController.getJob)
router.post('/new-job', jobController.storeJob)
router.put('/update-job/:id', jobController.updateJob)
router.delete('.delete-job/:id', jobController.deleteJob)

module.exports = router;