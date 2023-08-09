const Expence = require('../models/expence');
const User = require('../models/user');
const sequelize = require('../util/database');
exports.leaderboard = async (req, res) => {
    try {
        const data = await User.findAll({
            attributes: ['id', 'username', [sequelize.fn('sum', sequelize.col('expenceamount')), 'totalcost']]
            , include: [
                {
                    model: Expence,
                    attributes: []
                }
            ],
            group: ['user.id'],
            order: [['totalcost', 'DESC']]

        })

        res.status(200).json(data)
    } catch (err) {
        console.log(err)
    }
}
