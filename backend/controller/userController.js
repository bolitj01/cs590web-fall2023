const User = require('../models/userModel');

const getAllUsers = (req, res) => {
    User.find().then((data)=>{
        res.json(data)
    }).catch((err)=>{
        res.status(500).json({ error: err.message })
    })
  };

 
const getUserById = (req, res) => {
    User.findById(req.params.id).then((data)=>{
        res.json(data)
    }).catch((err)=>{
        res.status(500).json({ error: err.message })
    })
  };

  const updateUser = (req, res) => {
    const id = req.params.id;
    const data = req.body;

    User.updateOne({ _id: id }, { $set: data }).then((data)=>{
        res.json(data)
    }).catch((err)=>{
        res.status(500).json({ error: err.message })
    })
  };


const createUser = (req, res) => {
    const newUser = new User(req.body);
    newUser.save().then((data)=>{
        res.json(data)
    }).catch((err)=>{
        res.status(500).json({ error: err.message })
    })
  };


const deleteUserById = (req, res) => {
    const id = req.params.id;
    User.deleteOne({ _id: id }).then((data)=>{
        res.json(data)
    }).catch((err)=>{
        res.status(500).json({ error: err.message })
    })
  };


const isUser = (req, res) => {
    const data = req.body

    User.findOne({email:data.email,password:data.password}).then((data)=>{
        res.json(data)
    }).catch((err)=>{
        res.status(500).json({ error: err.message })
    })

  };

module.exports = {
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUserById,
    isUser
}