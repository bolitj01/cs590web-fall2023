const { default: mongoose } = require('mongoose');
const Topic = require('../models/topicModel');

const createTopic = async(data)=>
{
    data = JSON.parse(data);
    const pid = data.postid
    data.tags.map(async(data)=>{
        const result  = await Topic.find({topic:data}).then((data,err)=>{
            if(data.length == 0){
                return false;
            }else{
                return true;
            }
        })
        if(result == false){
            const newTopic = new Topic({topic:data,posts:[new mongoose.Types.ObjectId(pid)]}).save()
        }else{
            Topic.updateOne({topic:data},{$push:{posts:new mongoose.Types.ObjectId(pid)}}).then((data)=>{
            })
        }
       
    });
}

module.exports = {
    createTopic
}
