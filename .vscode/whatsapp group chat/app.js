const express=require("express");
const app=express();
const fs=require("fs");
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded())


app.get('/',(req,res,next)=>{
    fs.readFile('message.txt',(err,data)=>
    {
        if(err){
            data='no data exist'
        }
      
   
    console.log(data)
    res.send((data)+'<form action="/" onSubmit=document.getElementById("username").value=localStorage.getItem("username") method="POST">   <head><h1>Message</h1></head><input type="text" name="message" id="message"><input type ="hidden" name="username" id="username"> <button>submit</button/></form>')
   console.log(req.body.username)
})
})
app.post('/',(req,res,next)=>{
    
    fs.writeFile('message.txt',(req.body.username+':'+req.body.message),{Flag:'a'},err=>{
        console.log(err);
    })
    res.redirect('/')
})
app.get('/login',(req,res,next)=>{
    res.send(
       '<form  action="/" method="get" onSubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)"><input id="username" name="username" type="text"><button type="submit">add</button></form>'
    )
})
app.listen(3000)