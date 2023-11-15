import React, { useEffect, useState } from 'react'
import { usePostContext } from '../contextapi/postsContext';
import { addpost } from '../api/postApi';

function Post() {

    const{posts,setPosts} =  usePostContext();
    const [newpost,setNewPost] = useState("");
  const handlepost = async()=>{
    const res = await addpost({"user":localStorage.getItem("id"),post:newpost});
    console.log(res);
        if(res.msg === 1){
     
            res.post.user = [{
                firstname:res.firstname
            }]
            setPosts([res.post,...posts])
        }
        setNewPost("");
       
  }
  const handletextarea = (e) =>{
    setNewPost(e.target.value)
  }

  return (
    <div className='row postouter'>
    
    <div className='col'>
      <div className='row'>
      <div className='col'>
      <textarea className="form-control" value={newpost} maxLength={250} onChange={handletextarea} placeholder='Post Something!' id="posttextarea" rows="4"></textarea>
      </div>
      </div>
      <div className='row'>
      <div className='col'>
      <button className="btn text-center font-weight-bold postbtn" onClick={handlepost}>Post</button>
      </div>
      </div>
    </div>
  </div>
  )
}

export default Post
