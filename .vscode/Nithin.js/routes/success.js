const path = require('path');

const express = require('express');

const successController = require('../controllers/success');

const router = express.Router();

// /admin/add-product => GET
router.get('/success', successController.getsuccess);

module.exports = router;