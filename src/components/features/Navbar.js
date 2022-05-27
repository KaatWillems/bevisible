import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const getAllProfiles = () => {
      fetch("https://bevisible-backend.herokuapp.com/user/all", {
        // mode: 'no-cors',
        method:'GET',
         headers:{
        //   'Content-Type':'application/json'
        'Authorization': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyO…zIwfQ.-1Gj84_ZZ7BucNBSm9i90gspoMhge3I7be9E6T5hO6Y"
         }, 
        // body: JSON.stringify({email: user, password: pwd})
      })
      .then(response=> response.json())
      .then((data) => {
      // let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyO…zIwfQ.-1Gj84_ZZ7BucNBSm9i90gspoMhge3I7be9E6T5hO6Y"
      //   if (token) {
      
      //   navigate("/home", { replace: true });
        
      //   }
        console.log(data)
      })

    }
    getAllProfiles()
  }


  return (
    <div className='navbar-container'>


        
        <Link to="/home" className='navbar-icon explore-icon' onClick={handleSubmit}>
            <FontAwesomeIcon icon={faSearch} />
            <p className='text-icon-nav'>Explore</p>
            </Link>    

        {/* <Link to="/bookmark" className='navbar-icon proot-icon'>
        <FontAwesomeIcon icon={faBookmark} />
        <p className='text-icon-nav'>Bookmarks</p>
        </Link> */}

        <Link to="/profile" className='navbar-icon profile-icon'>
        <FontAwesomeIcon icon={faUser} />
       <p className='text-icon-nav'> Profile</p>
        </Link>

    </div>
  )
}

export default Navbar