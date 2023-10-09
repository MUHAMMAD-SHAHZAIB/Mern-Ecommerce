const express = require("express");
const app = express();
const errorHandlerMiddleware = require("./Middleware/Error");

app.use(express.json());

//=============All Routes Imports Start====================
const Product = require("./Routes/ProductRoute");
//=============All Routes Imports End======================

app.use("/api/v1", Product);

//=============Error Middleware Start======================
app.use(errorHandlerMiddleware);
//=============Error Middleware End========================

module.exports = app;
