const mongoose = require('mongoose');

const connectDB = async () => {
    const username= "mongodb"
    const pwd = "wtuPGgT5m7JfWLpM"
    const connectionString = "mongodb+srv://"+username+":"+pwd+"@cluster0.vhix8xx.mongodb.net/pfwopensource?retryWrites=true&w=majority"
  try {
    const conn = await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`Error connecting to database: ${err.message}`);
    process.exit(1); 
};
}
module.exports = connectDB
