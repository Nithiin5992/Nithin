const express=require('express');
const app=express();
const db = require('./util/database');
var cors=require('cors')
const bodyParser = require('body-parser');
const userroutes=require('./routes/user')
app.use(bodyParser.json({extended: false}));
app.use(cors());
app.use(userroutes);



 app.listen(4000);
