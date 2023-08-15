const Candy = require("../models/candies");

exports.postcandy = async (req, res, next) => {
    try {
        const candyname = req.body.candyname;
        const description = req.body.description;
        const price = req.body.price;
        const quantity = req.body.quantity;
        const data = await Candy.create({
            candyname: candyname,
            description: description,
            price: price,
            quantity: quantity
        })
        res.status(201).json({ newcandy: data })
    } catch (err) {
        console.log(err)
    }
}

exports.getcandy = async (req, res, next) => {
    try {
        const candy = await Candy.findAll()

        res.status(200).json({ allcandy: candy })
    } catch (err) {
        console.log(err)
    }
}

exports.deletecandy = (req, res, next) => {
    const candyid = req.params.id;
    Candy.destroy({ where: { id: candyid } })
    res.status(202)
}
