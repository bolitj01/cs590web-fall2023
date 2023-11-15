const express = require("express")
const connectDB = require('./config/db');
const bodyparser = require("body-parser")
const cors = require("cors")
const app = express()


const userRoutes = require("./routes/userRoutes")


const postRoutes = require("./routes/postRoutes")

connectDB();

app.use(express.json());
app.use(cors())


app.use('/users', userRoutes);
app.use('/post', postRoutes);


const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Server running at port ${port}`);
})