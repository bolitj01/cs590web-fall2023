import React, { useEffect, useState } from 'react'
import "../css/profile.css"
import ToggleMenu from '../components/ToggleMenu';
import Trending from '../components/Trending';
import Post from '../components/Post';
import Posts from '../components/Posts';
import { PostProvider } from '../contextapi/postsContext';


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
        

          <div className='col-sm-2 navigation'>

            <h1 className='filtertext'><i class="fa-solid fa-hashtag dropIcon"></i>Topics</h1>
            
            <select className="form-control" id="fruit" name="fruit">
            <option value="apple">Apple</option>
            <option value="banana">Banana</option>
            <option value="cherry">Cherry</option>
            <option value="date">Date</option>

            <option value="apple">Apple</option>
            <option value="banana">Banana</option>
            <option value="cherry">Cherry</option>
            <option value="date">Date</option>
            </select>
            
            <div className='tags'>
                <div className=''>
                  <ul>
                    <li>#ISS</li>
                    <li>#Athletics</li>
                  </ul>

                </div>
            </div>


          </div>

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
