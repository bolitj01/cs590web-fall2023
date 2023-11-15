import React, { useState } from 'react'
import { Link } from "react-router-dom";
function ToggleMenu() {
    
    const [togglemenu,setTogglemenu] = useState(false)
    const handletoggle = (e)=>{
      if(togglemenu == false){
        setTogglemenu(true)
      }else{
        setTogglemenu(false)
      }
    }

  return (
    <div className='col container d-flex align-items-center'>
    <i className="fa-solid fa-bars barsToggle" onClick={handletoggle}></i>
         <div className={`dropset ${(togglemenu) ? 'show':'hide'} `}>
              <ul>
                <Link to="/profile"><li><i className="fa-solid fa-user dropIcon"></i><span className="textDecDrop">Profile</span></li></Link>
                <li><i className="fa-solid fa-bookmark dropIcon"></i>My Posts</li>
                <li><i className="fa-sharp fa-solid fa-gear dropIcon"></i>Settings</li>
                <Link to="/login"><li><i className="fa-solid fa-circle-xmark dropIcon"></i>Logout</li></Link>
              </ul>
        </div>
    </div>
  )
}

export default ToggleMenu
