//Setup for Express and routes.

const express = require("express");
const walletRoutes = require("./routes/walletRoutes");
const errorHandler = require("./middlewares/errorHandler");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", walletRoutes);
app.use(errorHandler);

module.exports = app;
