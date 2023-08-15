const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const sequelize = require("./utils/candies");
const candyRoutes = require("./routers/candies");
app.use(bodyParser.json({ extended: false }));
app.use(cors());
app.use(candyRoutes);
sequelize.sync()
    .then(() => {
        app.listen(4300)
    })
    .catch((err) => console.log(err))