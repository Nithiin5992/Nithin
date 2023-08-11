const express = require('express');
const app = express();
const sequelize = require('./util/database');
const User = require('./models/user')
const Expence = require('./models/expence');
const Order = require("./models/order");
const Forgotpassword=require("./models/forgotpassword");
const cors = require('cors');
const bodyParser = require('body-parser');
const userroutes = require('./routes/user');
const expenceroutes = require('./routes/expence');
const purchaseroutes = require('./routes/purchase');
const premiumroutes = require('./routes/premium');
const passwordroutes=require('./routes/forgotpassword');
app.use(bodyParser.json({ extended: false }));
app.use(cors());
app.use(userroutes);
app.use(expenceroutes);
app.use(purchaseroutes)
app.use(premiumroutes);
app.use(passwordroutes);
User.hasMany(Expence);
Expence.belongsTo(User);
User.hasMany(Order);
Order.belongsTo(User);
User.hasMany(Forgotpassword);
Forgotpassword.belongsTo(User);

sequelize.sync({force:true})
    .then((responce) => {
        app.listen(4000);
    })
    .catch(err => console.log('err'))