const express = require('express')
const router = express.Router();
const postcandycontroller = require('../controllers/candies')
const getcandycontroller = require('../controllers/candies')
const deletecandycontroller = require('../controllers/candies')
router.post('/candies', postcandycontroller.postcandy)
router.get('/candies', getcandycontroller.getcandy)
router.delete('/candies/:id', deletecandycontroller.deletecandy)
module.exports = router;