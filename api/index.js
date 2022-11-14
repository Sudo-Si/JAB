const express = require("express");
const app = express();
const dotenv =require("dotenv");
const mongoose = require('mongoose')
 dotenv.config();
 mongoose.connect(process.env.MONGO_URL).then(console.log("Connected to Mongo")).catch((err)=>console.log(err));
 const PORT =process.env.PORT;
// console.log("yo")
app.listen(PORT, ()=>{
    console.log("Backend is running on port "+ PORT)
})