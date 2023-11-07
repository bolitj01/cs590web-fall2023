const User = require('../models/userModel');

const getAllUsers = (req, res) => {
    User.find().then((data)=>{
        res.json(data)
    }).catch((err)=>{
        res.status(500).json({ error: err.message })
    })
  };


const createUser = (req, res) => {
    const newUser = new User(req.body);
    newUser.save().then((data)=>{
        res.json({"msg":"user created"})
    }).catch((err)=>{
        res.status(500).json({ error: err.message })
    })
  };

module.exports = {
    getAllUsers,
    createUser
}