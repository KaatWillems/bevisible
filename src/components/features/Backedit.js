import React from 'react'
import { useNavigate } from 'react-router-dom';


function Backedit() {

 
    const navigate = useNavigate();
    return (
      <div className='backedit-container'>
        <a onClick={() => navigate(-1)}>Back</a>
        <a href="">Edit</a>
    </div>

    )

    
  }
  // return (
  //   <div className='backedit-container'>
  //      <a href="">Back</a>
  //       <a href="">Edit</a>
  //   </div>
  // )


export default Backedit