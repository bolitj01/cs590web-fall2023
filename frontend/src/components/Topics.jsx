import React, { useEffect, useState } from 'react'

import { getAlltopics } from '../api/topicApi';




const Topics = () => {

    const [data, setData] = useState([]);
    const [list,setList] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await getAlltopics();
        
          setData(response);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []); 
  const handletarget = (e)=>{
    var newArry=  data.filter((elem)=>{
        return  elem.topic !== e.target.value
      })
      
      setData(newArry)
  }
    

  return (
    <div className='col-sm-2 navigation'>

            <h1 className='filtertext'><i class="fa-solid fa-hashtag dropIcon"></i>Topics</h1>
            
            <select  className="form-control" onChange={handletarget} id="tagList" name="tagList">
                {
                    (data) ? (
                    
                      data.map((item,index) => (
                        <option key={index} className='tagOption'>{item.topic}</option>
                      ))
    
                    
                    ):(<option>No topics available</option>)


                }
            
            </select>
            
            <div className='tags'>
                <div className=''>
                  <ul>
                 <li>athletic</li>
                 
                  </ul>

                </div>
            </div>


          </div>
  )
}

export default Topics
