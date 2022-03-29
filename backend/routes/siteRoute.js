const express = require('express');

const router = express.Router();

const siteController = require("../controllers/siteController")

router.get('/', siteController.index)
router.get('/:id', siteController.getSite)
router.post('/new_site', siteController.storeSite)
router.post('/:id', siteController.updateSite)
router.delete('/:id', siteController.destroySite)

module.exports = router;