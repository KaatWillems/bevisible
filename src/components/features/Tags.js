import React, {useState} from 'react';

const Tags = (props) => {

const [isActive, setActive] = useState(false)

const toggleClass = () => {
  setActive(!isActive);
}



  return (
    <>
    	
              <button 
          className={isActive ? 'tagButton2' : 'tagButton' || "tagButton"} onClick={toggleClass}> {props.tag}
              </button> 
            
    </>
  )
}

export default Tags;
