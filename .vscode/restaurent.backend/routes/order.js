const express=require('express');
const router=express.Router();
const Order=require('../models/restaurent')
router.post('/data/postorder',async (req,res,next)=>{
    try{
        const fooditem=req.body.fooditem;
        const foodprice=req.body.foodprice;
        const tablenumber=req.body.tablenumber;
        
        const data= await Order.create(
            {
                 fooditem: fooditem,
                  foodprice:foodprice,
                  tablenumber:tablenumber
                }
      )
            res.status(201).json({neworder:data})
    }catch(err){
        console.log(err);
    }
})

router.get('/data/getorder',async(req,res,next)=>{
    try{
        const orders=await Order.findAll()

        res.status(200).json({allorders:orders})
      }
    
    catch(err){(console.log(err))
}
})
module.exports=router