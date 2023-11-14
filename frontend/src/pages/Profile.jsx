import React, { useState } from 'react'
import "../css/profile.css"
function Profile() {
  document.title = "Profile";

    const [togglemenu,setTogglemenu] = useState(false)
    const handletoggle = (e)=>{
      if(togglemenu == false){
        setTogglemenu(true)
      }else{
        setTogglemenu(false)
      }
    }

  return (
    <>
    <div className='container-fluid'>
          <div className='row logoouter'>
            <div className='col-11'>
            <img id="logo" src="mainlogo.png" />
            </div>
            <div className='col container d-flex align-items-center'>
            <i class="fa-solid fa-bars barsToggle" onClick={handletoggle}></i>
                 <div className={`dropset ${(togglemenu) ? 'show':'hide'} `}>
                      <ul>
                        <li><i class="fa-solid fa-user dropIcon"></i>Profile</li>
                        <li><i class="fa-solid fa-bookmark dropIcon"></i>My Posts</li>
                        <li><i class="fa-sharp fa-solid fa-gear dropIcon"></i>Settings</li>
                        <li><i class="fa-solid fa-circle-xmark dropIcon"></i>Logout</li>
                      </ul>
                </div>
            </div>
          </div>
    </div>
    <div className='container-fluid'>
      <div className='row border'>
        

          <div className='col-sm-2 navigation'>

            <h1 className='filtertext'>Topics</h1>
            
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

            <div className='row postouter'>
              <div className='col'>
                <div className='row'>
                <div className='col'>
                <textarea className="form-control" maxLength={250} placeholder='Post Something!' id="posttextarea" rows="4"></textarea>
                </div>
                </div>
                <div className='row'>
                <div className='col'>
                <button className="btn text-center font-weight-bold postbtn">Post</button>
                </div>
                </div>
              </div>
            </div>


            <div className='row'>

            <div className='col'>
                  <div className="card post">
                    <div className="card-header">
                      <div className='row'>
                        <div className='col'>
                        <img className="avatarpost" src="avatar/avatar1.jpg" />
                        <h5 className='pname'>Hrihtik Mnai</h5>
                        <h6 className='pdate text-muted'>2 days ago</h6>
                        </div>
                       
                      </div>
                    </div>
                        <div className="card-body">
                      
                          <p className="card-text">How are you?</p>
                        
                        </div>

                    <div className="card-footer container-fluid">
                        <div className='row'>

                            <div className='col plike'><i class="fa-regular fa-thumbs-up dropIcon"></i> (20)</div>
                            <div className='col pcomment'><i class="fa-solid fa-comments dropIcon"></i> (2)</div>

                      </div>
                    </div>
                 </div>
                 

              </div>
  
            </div>



          </div>

          <div className='col-sm-2'>
            <div className='trendingouter'>
            <h3 className='trendingtxt'><i class="fa-solid fa-fire dropIcon"></i>Trending</h3>
            <div className='trendinginner'>
              <ul>
                  <li>#Atheletics (20)</li>
                  <li>#ISS (10)</li>
              </ul>
            </div>
            </div>
          </div>

        </div>



      </div>
    
    
    </>
  )
}

export default Profile
