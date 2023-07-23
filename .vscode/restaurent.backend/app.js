const express=require('express');
const app=express();
const Order=require('./models/restaurent')
const bodyParser=require('body-parser');
const sequelize=require('./util/database')
const cors=require("cors")

app.use(bodyParser.urlencoded({extended:false}));
app.use=cors()
app.get('/getorder',async (req,res,next)=>{
    try{
        const orders=await Order.findAll()
        
          res.status(200).json({allOrders:orders})
        }
      catch(err){(console.log(err))}    
})
app.post('/postorder',async (req,res,next)=>{
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
})
app.delete('/deleteorder',(req,res,next)=>{
    const prodId=req.params.id
Order.destroy({where:{id:prodId}})
})
sequelize.sync()
.then(()=>{
    app.listen(3000);
})
.catch((err)=>console.log(err))