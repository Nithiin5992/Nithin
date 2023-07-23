const Sequelize=require("sequelize");
const sequelize=require("../util/database")
const CartItem=item=sequelize.define('cart-item',{
id:{
   type:Sequelize.INTEGER,
   autoIncrement:true,
  allowNull:false,
  primaryKey:true

},
quantity:{
    type:Sequelize.INTEGER
}
})
module.exports=CartItem