import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar-container'>


        
        <Link to="/home" className='navbar-icon explore-icon'>
            <FontAwesomeIcon icon={faSearch} />
            <p className='text-icon-nav'>Explore</p>
            </Link>    

        <Link to="/bookmark" className='navbar-icon proot-icon'>
        <FontAwesomeIcon icon={faBookmark} />
        <p className='text-icon-nav'>Bookmarks</p>
        </Link>

        <Link to="/profile" className='navbar-icon profile-icon'>
        <FontAwesomeIcon icon={faUser} />
       <p className='text-icon-nav'> Profile</p>
        </Link>

    </div>
  )
}

export default Navbar