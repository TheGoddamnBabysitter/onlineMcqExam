const express = require("express");
const app = express();

// const mongoose = require("mongoose");

const cors = require("cors");
const bodyParser = require("body-parser");
const mainRoutes = require("./routes/routes");
const PORT = process.env.PORT || 4444;
const helmet = require("helmet");
const morgan = require("morgan");

// Configuration
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));

// Routes
app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use("/api", mainRoutes);

app.listen(PORT, function () {
    console.log("Server is running on Port: http://localhost:" + PORT);
});
