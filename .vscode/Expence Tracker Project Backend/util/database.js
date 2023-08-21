const Sequelize = require('sequelize');

const sequelize = new Sequelize('expencetracker','Nithinkumar','Nithin5992', {
  dialect: 'mysql',
  host: 'database-2.cjvjogetbbwx.us-east-1.rds.amazonaws.com'
});

module.exports = sequelize;