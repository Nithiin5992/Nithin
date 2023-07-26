const express=require("express");
const app=express();
const cors=require("cors")
const bodyParser=require("body-parser");
const Candy=require("./models/candy");
const sequelize=require("./util/candy")
app.use(bodyParser.json({extended:false}))
app.use(cors());
app.post('/postcandydetails',async (req,res,next)=>{
    try{
        const candyname=req.body.candyname;
        const description=req.body.description;
        const price=req.body.price;
        const quantity=req.body.quantity;
    const data =await Candy.create({
         candyname:candyname,
         description:description,
         price:price,
         quantity:quantity
    })
    res.status(201).json({newcandy:data})
}catch(err){
    console.log(err)
}
})
app.get('/getcandydetails',async (req,res,next)=>{
    try{
        const candy=await Candy.findAll()

        res.status(200).json({allcandy:candy})
    }catch(err){
        console.log(err)
    }
})
app.delete('/deletecandy/:id',(req,res,next)=>{
    const candyid=req.params.id;
    Candy.destroy({where:{id:candyid}})
    res.status(202)
})
sequelize.sync()
.then(()=>{
app.listen(4300)
}) 
.catch((err)=>console.log(err))