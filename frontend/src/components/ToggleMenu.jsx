import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

import { getAlltopics } from '../api/topicApi';
function ToggleMenu() {
    
    const [togglemenu,setTogglemenu] = useState(false)
    const [menu,setMenu]=useState([]);
    const handletoggle = (e)=>{
      if(togglemenu == false){
        setTogglemenu(true)
      }else{
        setTogglemenu(false)
      }
    }
    useEffect(()=>{
        const fetchdata = async()=>{
            const s = await getAlltopics();
            setMenu(s);
        }
        fetchdata();
    }),[];

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
