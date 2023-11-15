const mongoose = require("mongoose")

const topicSchema= new mongoose.Schema({
    topic:String,
    posts:[]
});

const User = mongoose.model('topic', topicSchema);
module.exports = User