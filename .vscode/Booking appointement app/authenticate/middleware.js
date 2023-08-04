const jwt=require("jsonwebtoken");
const User = require('../models/user');
exports.authenticate=async(req,res,next)=>{
  const user=jwt.verify(req.header('authorization'),'secretkey')
 
  User.findOne({ where: { id: user.userid } }).then(user => {
    req.user=user
     next();
  })
}