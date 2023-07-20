const path=require('./util/path')
const express=require('express');
const sequelize = require('./util/database');
var cors=require('cors')

const bodyParser = require('body-parser');
const app=express();
const userroutes=require('./routes/user')
app.use(bodyParser.json({extended: false}));
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(cors());
app.use(userroutes);


sequelize
.sync()
.then(result=>{

    app.listen(4000);
})
.catch(err=>console.log(err))