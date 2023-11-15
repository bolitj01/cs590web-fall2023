const mongoose = require("mongoose")

const postSchema= new mongoose.Schema({
    post:String,
    user: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }],
    like:[{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }],
    comments:[],
    tags:[],
    images:[],
    createdAt: {
        type: Date,
        default: Date.now
      }
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post