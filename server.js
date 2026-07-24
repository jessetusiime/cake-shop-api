const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const swaggerUi = require("swagger-ui-express");
const session = require("express-session");
const passport = require("passport");

require("./config/passport");

const connectDB = require("./mongodb.js");

const swaggerDocument = require("./swagger.json");

const routes = require("./routes");

const app = express();

// Add this for Render
app.set('trust proxy', 1);

app.use(cors());

app.use(express.json());

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        proxy: true,
        cookie: {
            secure: process.env.NODE_ENV === 'production',
            maxAge: 24 * 60 * 60 * 1000
        }
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/", routes);

app.get("/", (req, res) => {
    res.send("Cake Shop API is running...");
});

const PORT = process.env.PORT || 8080;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});