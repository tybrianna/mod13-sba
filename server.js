const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
const mongoose = require("mongoose");
require('dotenv').config();
 
// const uri = process.env.MONGO_URI;
 
// // Connect to MongoDB and handle the promise
// mongoose.connect(uri)
//   .then(() => console.log('Successfully connected to MongoDB!'))
//   .catch(err => console.error('Connection error', err));

// Test Route
app.get("/product", (req, res) => {
    res.send(product)
})


  // PORT
app.listen(PORT, ()=>{
    console.log(`Listening on PORT: ${PORT}`)
});