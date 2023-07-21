const express=require('express')
const router=express.Router();
const ordercontroller=require("../controller/order")
router.post('/postorders',ordercontroller.postorder)
router.get('/getorders',ordercontroller.getorder)
router.delete('/deleteorders/:id',ordercontroller.deleteorder)
router.edit('editorders/:id',ordercontroller.editorder)
module.exports=router;