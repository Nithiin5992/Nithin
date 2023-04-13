const http = require('http');
const express = require('express')
const app =express();
app.use((req,res,next)=>{
console.log ("hello");
next();
})
app.use((req,res,next)=>{
    console.log ("hello 55");
    res.send('<h1>hello</h1>')

    })

app.listen(3000);
