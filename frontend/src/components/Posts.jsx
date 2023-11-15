import React, { useEffect } from 'react'
import { usePostContext } from '../contextapi/postsContext';
import { getAllPosts } from '../api/postApi';
import { convertDate } from '../functions/convertDate';


const Posts = () => {
    const{posts,setPosts} =  usePostContext();
  

    useEffect(() => {
        const fetchData = async () => {
            const res = await getAllPosts();

            setPosts(res.posts)
    
        };
    
        fetchData();
      }, []); 

      
 

  return (
    <>
    
    {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (



        <ul className='postouterul'>
          {posts.map((post,index) => (
          




                
    <div key={index} className="card post">
        
    <div className="card-header">
      <div className='row'>
        <div className='col'>
        <img className="avatarpost" src="avatar/avatar1.jpg" />
        <h5 className='pname'>{post.user[0].firstname}</h5>
        <h6 className='pdate text-muted'>{convertDate(post.createdAt)}</h6>
        </div>
       
      </div>
    </div>
        <div className="card-body">
      
          <p className="card-text">{post.post}</p>
        
        </div>

    <div className="card-footer container-fluid">
        <div className='row'>

            <div className='col plike'><i class="fa-regular fa-thumbs-up dropIcon"></i> ({post.like.length})</div>
            <div className='col pcomment'><i class="fa-solid fa-comments dropIcon"></i> ({post.comments.length})</div>

      </div>
    </div>
 </div>









          ))}
        </ul>
     
     
     
     
     
     
     )}






    
    </>
      )
}

export default Posts
