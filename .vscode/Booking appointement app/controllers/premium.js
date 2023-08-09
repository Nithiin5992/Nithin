const Expence = require('../models/expence');
const User = require('../models/user');
exports.leaderboard=async (req,res)=>{
try{
const data=await Expence.findAll()
for(let i=0;i<data.length;i++){
  const user=await User.findOne({where:{id:data[i].userId}})
res.status(203).json({username:user.username,expenceamount:data[i].expenceamount})
}
}catch(err){
    console.log(err)
}
}