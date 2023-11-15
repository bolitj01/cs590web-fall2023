const mongoose = require("mongoose")

const userSchema= new mongoose.Schema({
    email: String,
    password: String,
    firstname: String,
    lastname: String,
    pfwid: Number,
    createdAt: {
        type: Date,
        default: Date.now
      }
});

const User = mongoose.model('User', userSchema);
module.exports = User