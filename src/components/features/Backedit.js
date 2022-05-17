import React from 'react'
import { useNavigate, useState} from 'react-router-dom';
import Button from "./Button"

function Backedit(props) {
 const navigate = useNavigate();


    return (
      <div className='backedit-container'>
        <a onClick={() => navigate(-1)}>Back</a>
        <a onClick={props.onClick}>Edit</a>
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