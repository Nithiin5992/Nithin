const Sequelize=require("sequelize");
const sequelize=require('../util/database')
const Order=sequelize.define('order',{
    id:{

        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    fooditem:{
        type: Sequelize.STRING,
    },
    foodprice:{
        type: Sequelize.INTEGER,
    },
    tablenumber:{
        type: Sequelize.INTEGER,
    }

})
module.exports=Order;