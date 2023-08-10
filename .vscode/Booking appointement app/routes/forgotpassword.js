const express = require('express');
const router = express.Router();
const forgotpasswordcontroller = require('../controllers/forgotpassword');
router.post('/password/forgotpassword', forgotpasswordcontroller.forgotpassword)
module.exports = router;