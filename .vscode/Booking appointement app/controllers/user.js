const path = require('path')
const User = require('../models/user')
exports.getuser = (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'user.html'))
}
exports.userlogin = async (req, res, next) => {
  try {
    const email = req.body.Email;
    const password = req.body.password;
    const users = await User.findAll()
   
    var flag=0;
 for (let i=0;i<users[0].length;i++){
    if(users[0][i].email==email){
      flag=1;
      if(users[0][i].password==password)
      {
        res.status(201)
         console.log('login successful')
      }
      else{
        
        res.status(401)
        console.log('User not authorized')
        
      }
      break;
    }
   }
   if(flag==0){
    res.status(404)
    console.log('User not Found')
   
   }

   
   
 
}
catch (err) { (console.log(err)) }
}

exports.usersignup = async (req, res, next) => {
  try {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.Email;

    const user = new User(null, username, password, email)
    const data = await user.save()

    res.status(201).json({ newuser: data })
    console.log('signup successful')

  } catch (err) { console.log('err') }
}

exports.deleteuser = (req, res, next) => {
  const uId = req.params.id;
  User.destroy({ where: { id: uId } })
}

