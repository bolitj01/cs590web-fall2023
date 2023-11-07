const express = require("express")
const connectDB = require('./config/db');
const bodyparser = require("body-parser")
const app = express()


const userRoutes = require("./routes/userRoutes")


connectDB();

app.use(express.json());
//app.use(bodyparser);


app.use('/users', userRoutes);


const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Server running at port ${port}`);
})