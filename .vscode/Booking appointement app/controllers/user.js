const path=require('path')
const User=require('../models/user')
exports.getuser=(req,res,next) => {
    res.sendFile(path.join(__dirname,'../','views','user.html'))
    }
 exports.getuserdata = async (req, res, next) => {
    try{
      const users=await User.findAll()
      
        res.status(200).json({allUsers:users})
      }
    catch(err){(console.log(err))}    
 }  
       
exports.postuser=async (req,res,next) => {
    try{
           const username=req.body.username;
           const  password =req.body.password;
           const email = req.body.Email;
           
           const user=new User(null,username,password,email)
   const data= await user.save()
      
        res.status(201).json({newuser:data}) 
        console.log('signup successful')
      
  }catch(err){ console.log('err')}
}

exports.deleteuser=(req,res,next)=>{
    const uId = req.params.id;
    User.destroy({where:{id:uId}})
}

