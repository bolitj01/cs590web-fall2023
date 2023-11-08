const User = require('../models/userModel');

const getAllUsers = async (req, res) => {
    User.find().then((data)=>{
        res.json(data)
    }).catch((err)=>{
        res.status(500).json({ error: err.message })
    })
  };

 
const getUserById = async (req, res) => {
    User.findById(req.params.id).then((data)=>{
        res.json(data)
    }).catch((err)=>{
        res.status(500).json({ error: err.message })
    })
  };

  const updateUser =  async (req, res) => {
    const id = req.params.id;
    const data = req.body;

    User.updateOne({ _id: id }, { $set: data }).then((data)=>{
        res.json(data)
    }).catch((err)=>{
        res.status(500).json({ error: err.message })
    })
  };


const createUser = async (req, res) => {
    const newUser = new User(req.body);

   await User.findOne({email:req.body.email}).then((data)=>{
        if(data){
        res.json({msg:2,erMsg:"Email already exist"})
        }else{
            const newUser = new User(req.body);
            newUser.save().then((data)=>{
                res.json({msg:1,erMsg:"User created"})
            }).catch((err)=>{
                res.status(500).json({ error: err.message })
            })
        }
    }).catch((err)=>{
        res.status(500).json({ error: err.message })
    })

    
  };


const deleteUserById = async (req, res) => {
    const id = req.params.id;
    User.deleteOne({ _id: id }).then((data)=>{
        res.json(data)
    }).catch((err)=>{
        res.status(500).json({ error: err.message })
    })
  };


const isUser = async (req, res) => {
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