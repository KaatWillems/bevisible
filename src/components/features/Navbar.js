import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'

function Navbar(props) {

  
  //onst [id, props.setId] = useState('')
  
  //console.log(props.id , "consolelog id from navbar")

  //const idX = useContext(IDContext);

  return (
    <div className='navbar-container'>


        
        <Link to="/home" className='navbar-icon explore-icon' 
        //onClick={handleSubmit}
        >
            <FontAwesomeIcon icon={faSearch} />
            <p className='text-icon-nav'>Explore</p>
            </Link>    


        <Link to={`/profile/${props.id}`} className='navbar-icon profile-icon'>
        <FontAwesomeIcon icon={faUser} />
       <p className='text-icon-nav'> Profile</p>
        </Link>

    </div>
  )
}

export default Navbar