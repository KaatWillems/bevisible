import React from 'react'
import { useNavigate} from 'react-router-dom';


function Back(props) {
    const navigate = useNavigate();
  return (
    
    <a className='a-back' onClick={() => navigate(-1)}>Back</a>
    
  )
}

export default Back