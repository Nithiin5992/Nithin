const Sequelize=require("sequelize");
const sequelize=require("../util/database")
const Orders=sequelize.define('orders',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },

      product: Sequelize.STRING,
     
      price: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
})

module.exports=Orders