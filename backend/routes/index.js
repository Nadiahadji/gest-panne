const express = require('express');

const router = express.Router();

const siteController = require("../controllers/siteController")
const eqController = require("../controllers/equipementController")
const userController = require('../controllers/userController')

//Site router
router.get('/sites', siteController.index)
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
router.post('/login', userController.login)
router.put('/update-user/:id', userController.updateUser)
//router.delete('/delete-user/:id', userController.deleteUser)

module.exports = router;