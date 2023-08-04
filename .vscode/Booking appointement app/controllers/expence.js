const Expence = require('../models/expence');
const jwt=require("jsonwebtoken");

exports.postdailyexpence = async (req, res, next) => {
    try {
        const expenceamount = req.body.expenceamount;
        const description = req.body.description;
        const category = req.body.category;
        const userid=req.user.id
     
        
        const data = await Expence.create({
            expenceamount: expenceamount,
            description: description,
            category:category,
            userId:userid
            
        })
        res.status(200).json({ dailyexpence: data, message: 'added daily expence' })
    }
    catch (err) {
        console.log(err)
    }
}
exports.getdailyexpence = async (req, res, next) => {
   
    const expences = await Expence.findAll({where:{userId:req.user.id}})
    res.status(200).json({ dailyexpence: expences })

}
exports.deletedailyexpence = (req, res, next) => {
    const id = req.params.id
    Expence.destroy({ where: { id: id } })
}