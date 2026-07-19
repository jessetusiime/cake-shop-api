const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const swaggerUi = require("swagger-ui-express");

dotenv.config();

const connectDB = require("./mongodb.js");

const swaggerDocument = require("./swagger.json");

const routes = require("./routes");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/", routes);

app.get("/", (req, res) => {
    res.send("Cake Shop API");
});

const PORT = process.env.PORT || 8080;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});