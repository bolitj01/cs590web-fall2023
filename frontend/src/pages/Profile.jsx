import React from 'react'
import "../css/profile.css"
function Profile() {
  document.title = "Profile";

  return (
    <>
    <div className='container-fluid'>
          <div className='row logoouter'>
            <div className='col-11'>
            <img id="logo" src="mainlogo.png" />
            </div>
            <div className='col container d-flex align-items-center'>
            <img className="avatarnav" src="avatar/avatar1.jpg" />
                 <div className='dropset hide'>
                      <ul>
                        <li>Profile</li>
                        <li>My Posts</li>
                        <li>Settings</li>
                        <li>Logout</li>
                      </ul>
                </div>
            </div>
          </div>
    </div>
    <div className='container-fluid'>
      <div className='row border'>
        

          <div className='col-sm-2 navigation'>

            <h1 className='filtertext'>Topics</h1>
            
            <select class="form-control" id="fruit" name="fruit">
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
                <textarea class="form-control" maxLength={250} placeholder='Post Something!' id="posttextarea" rows="4"></textarea>
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
                  <div class="card post">
                    <div class="card-header">
                      <div className='row'>
                        <div className='col'>
                        <img className="avatarpost" src="avatar/avatar1.jpg" />
                        <h5 className='pname'>Hrihtik Mnai</h5>
                        <h7 className='pdate text-muted'>2 days ago</h7>
                        </div>
                       
                      </div>
                    </div>
                        <div class="card-body">
                      
                          <p class="card-text">How are you?</p>
                        
                        </div>

                    <div class="card-footer container-fluid">
                        <div className='row'>

                            <div className='col plike'>Like (20)</div>
                            <div className='col pcomment'>Comment (2)</div>

                      </div>
                    </div>
                 </div>
                 

              </div>
  
            </div>



          </div>

          <div className='col-sm-2'>
            <div className='trendingouter'>
            <h3 className='trendingtxt'>Trending</h3>
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
