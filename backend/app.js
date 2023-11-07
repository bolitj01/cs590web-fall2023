const express = require("express")
const app = express()
const connectDB = require('./config/db');
const port = process.env.PORT || 3000;

connectDB();

app.use(express.json());


app.listen(port, ()=>{
    console.log(`Server running at port ${port}`);
})