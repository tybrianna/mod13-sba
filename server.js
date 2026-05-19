const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
require('dotenv').config();
const uri = process.env.MONGO_URI;
const connectDB = require("./config/connection");
const productRoutes = require("./routes/productRoutes");

// MIDDLEWARE
app.use(express.json());

// DATABASE
connectDB();

// ROUTES
// Test Route
app.get("/", (req, res) => {
    res.send(newProduct)
})

// Product Routes
app.use("/product", productRoutes);


  // PORT
app.listen(PORT, ()=>{
    console.log(`Listening on PORT: ${PORT}`)
});