const express = require('express');
const app = express();
const sequelize = require('./util/database');
const User = require('./models/user')
const Expence = require('./models/expence');
var cors = require('cors')
const bodyParser = require('body-parser');
const userroutes = require('./routes/user');
const expenceroutes = require('./routes/expence')
app.use(bodyParser.json({ extended: false }));
app.use(cors());
app.use(userroutes);
app.use(expenceroutes);
User.hasMany(Expence);
Expence.belongsTo(User);
sequelize.sync({force:true})
    .then((responce) => {
        app.listen(4000);
    })
    .catch(err => console.log('err'))