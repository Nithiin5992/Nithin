const path=require('path')
const User=require('../models/user')
exports.getuser=(req,res,next) => {
    res.sendFile(path.join(__dirname,'../','views','user.html'))
    }
 exports.getuserdata = async (req, res, next) => {
    console.log('kk')
      const users=await  User.findAll()
        
            res.status(200).json({allUsers:users})
 }  
       
exports.postuser=async (req,res,next) => {
    try{
           const username=req.body.username;
           const  password =req.body.password;
           const Email = req.body.Email;
   const data= await User.create(
        {
            username:username,
            password:password,
            email:Email
        }
      
   )
        res.status(201).json({newuser:data}) 
      
  }catch(err){ console.log(err)}
}

exports.deleteuser=(req,res,next)=>{
    const uId = req.params.id;
    User.deletebyId(uId);

}