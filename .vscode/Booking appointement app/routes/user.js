const express=require('express')
const router=express.Router();
const usercontroller=require('../controllers/user')
router.get('/user',usercontroller.getuser)
router.get('/user/data',usercontroller.getuserdata)
router.post('/user/signup',usercontroller.postuser)
router.delete('/user/deletedata/:id',usercontroller.deleteuser)

module.exports=router;