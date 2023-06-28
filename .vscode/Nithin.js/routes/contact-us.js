const path = require('path');

const express = require('express');

const contactController = require('../controllers/contact-us');

const router = express.Router();

// /admin/add-product => GET
router.get('/contact-us', contactController.getcontact);

module.exports = router;