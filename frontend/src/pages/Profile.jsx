import React, { useEffect, useState } from 'react'
import "../css/profile.css"
import ToggleMenu from '../components/ToggleMenu';
import Trending from '../components/Trending';
import Post from '../components/Post';
import Posts from '../components/Posts';
import { PostProvider } from '../contextapi/postsContext';
import Topics from '../components/Topics';


function Profile() {
  document.title = "Profile";
 
  return (
    <>

    <div className='container-fluid'>
          <div className='row logoouter'>
            <div className='col-11'>
            <img id="logo" src="mainlogo.png" />
            </div>
            <ToggleMenu></ToggleMenu>
          </div>
    </div>

    <PostProvider>
    <div className='container-fluid'>
      <div className='row border'>
        

          <Topics></Topics>

          <div className='col-sm-8'>
              <div className='row'>

                <div className='col'>
           
                  <Post></Post>          
                
                 <Posts></Posts>
           
              </div>
  
            </div>



          </div>

          <div className='col-sm-2'>
            <Trending></Trending>
          </div>

        </div>



      </div>
    
      </PostProvider>
    </>
  )
}

export default Profile
