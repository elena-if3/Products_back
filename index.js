require("dotenv").config();
const express = require("express");
const { sequelize } = require("./models");
const { notFoundHandler, errorHandler } = require("./middleware/errorHandler");
const routes = require("./routes/product.route");
const cors = require("cors");

const app = express();
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());
// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", routes);
app.use(errorHandler);
app.use(notFoundHandler);

const bootstrap = async () => {
    await sequelize.authenticate();
    await sequelize.sync({
        alter: true,
    });
    app.listen(process.env.PORT, () => {
        console.log("App running on port", process.env.PORT);
    });
};

bootstrap();
