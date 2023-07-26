const Sequelize=require("sequelize");
const sequelize=require("../util/candy")
const Candy=sequelize.define('candy',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    candyname:{
        type:Sequelize.STRING
    },
    description:{
        type:Sequelize.STRING
    },
    price:{
        type:Sequelize.INTEGER
    },
    quantity:{
        type:Sequelize.INTEGER
    }
})
   module.exports=Candy;