const express = require('express');
const cookieParser = require("cookie-parser");
var bodyParser = require('body-parser')
const app = express();
app.use(cookieParser());
app.use(bodyParser.json({ limit: '50mb' }));
/* Importing the userRoutes file. */
const userRoutes = require("./routes/userRoutes/userRoutes");
const bodyPartsRoutes = require("./routes/bodyPartsRoutes/bodyPartsRoutes");
const equipmentRoutes = require("./routes/equipmentRoutes/equipmentRoutes");
const exerciseRoutes = require("./routes/exerciseRoutes/exerciseRoutes");
const targetRoutes = require("./routes/targetRoutes/targetRoutes");
const importdata = require("./routes/importDataRoutes/importDataRoutes");
/* A middleware that parses the body of the request and makes it available in the req.body object. */
app.use(express.json());

/* Telling the app to use the userRoutes file. */
app.use("/api/v1", userRoutes);
app.use("/api/v1", bodyPartsRoutes);
app.use("/api/v1", equipmentRoutes);
app.use("/api/v1", exerciseRoutes);
app.use("/api/v1", targetRoutes);
app.use("/api/v1", importdata);
/* Exporting the app object so that it can be used in other files. */
module.exports = app;