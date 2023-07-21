const Order=require("../models/order");
exports.postorder=async (req,res,next)=>{
    try{
        const product=req.body.product;
        const price=req.body.price;
        const data= await Order.create({
            product : product,
            price:price
        })
            res.status(201).json({neworder:data})
    }catch(err){
        console.log(err);
    }
}
exports.getorder=async (req,res,next)=>{
    try{
        const orders=await Order.findAll()
        
          res.status(200).json({allOrders:orders})
        }
      catch(err){(console.log(err))}    
}
exports.deleteorder=(req,res,next)=>{
    const uid=req.params.id;
    Order.destroy({where:{id:uid}})
}
exports.editorder=(req,res,next)=>{
}