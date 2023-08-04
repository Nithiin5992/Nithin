const express = require('express');
const router = express.Router();
const authenticatecontroller=require('../authenticate/middleware')
const expencecontroller = require('../controllers/expence');
router.post('/dailyexpence',authenticatecontroller.authenticate,expencecontroller.postdailyexpence);
router.get('/dailyexpence', authenticatecontroller.authenticate,expencecontroller.getdailyexpence);
router.delete('/dailyexpence/:id', expencecontroller.deletedailyexpence);
module.exports = router;