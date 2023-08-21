const Sequelize = require('sequelize');

const sequelize = new Sequelize('expencetracker','admin', 'Nithin5992', {
  dialect: 'mysql',
  host: 'database-1.cjvjogetbbwx.us-east-1.rds.amazonaws.com'
});

module.exports = sequelize;