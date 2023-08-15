const express=require('express');
const app=express();
const sequelize=require('./util/database')
const cors=require("cors")
const bodyParser=require('body-parser');
const orderroutes=require('./routes/order')

app.use(bodyParser.json({extended:false}));
app.use(cors());
app.use(orderroutes)
app.delete('/deleteorder',(req,res,next)=>{
    const prodId=req.params.id
Order.destroy({where:{id:prodId}})
})
sequelize
.sync()
.then(()=>{
    app.listen(3000);
})
.catch((err)=>console.log(err))