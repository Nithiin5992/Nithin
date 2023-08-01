const express = require('express');
const router = express.Router();
const expencecontroller = require('../controllers/expence');
router.post('/dailyexpence', expencecontroller.postdailyexpence);
router.get('/dailyexpence', expencecontroller.getdailyexpence);
router.delete('/dailyexpence/:id', expencecontroller.deletedailyexpence);
module.exports = router;