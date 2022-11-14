const express = require("express");
const app = express();
const dotenv =require("dotenv");
const mongoose = require('mongoose');
const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')
 dotenv.config();
 app.use(express.json());
 mongoose.connect(process.env.MONGO_URL)
 .then(console.log("Connected to Mongo"))
 .catch((err)=>console.log(err));

 app.use("/api/auth", authRoute);
 app.use("/api/users", userRoute);
 const PORT =process.env.PORT;
// console.log("yo")
app.listen(PORT, ()=>{
    console.log("Backend is running on port "+ PORT)
})