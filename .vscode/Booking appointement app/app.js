const express = require('express');
const app = express();
const sequelize = require('./util/database');
const User = require('./models/user')
const Expence = require('./models/expence');
const Order = require("./models/order")
var cors = require('cors')
const bodyParser = require('body-parser');
const userroutes = require('./routes/user');
const expenceroutes = require('./routes/expence');
const purchaseroutes = require('./routes/purchase')
app.use(bodyParser.json({ extended: false }));
app.use(cors());
app.use(userroutes);
app.use(expenceroutes);
app.use(purchaseroutes)
User.hasMany(Expence);
Expence.belongsTo(User);
User.hasMany(Order);
Order.belongsTo(User);
sequelize.sync()
    .then((responce) => {
        app.listen(4000);
    })
    .catch(err => console.log('err'))