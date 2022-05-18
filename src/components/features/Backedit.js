import React from 'react'
// import { useNavigate, useState} from 'react-router-dom';
import Back from './Back';
import Edit from './Edit';
// import Button from "./Button"

function Backedit(props) {
 


    return (

      <div className='backedit-container'>
        <Back />
        <Edit onClick={props.onClick} />
        
        
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