import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
    <div className='navbar-container'>
        
        <div className='navbar-icon explore-icon'>
            <FontAwesomeIcon icon={faSearch} />
            <p className='text-icon-nav'>Explore</p>
            </div>        
        <div className='navbar-icon proot-icon'>
        <FontAwesomeIcon icon={faBookmark} />
        <p className='text-icon-nav'>Bookmarks</p>
        </div>
        <div className='navbar-icon profile-icon'>
        <FontAwesomeIcon icon={faUser} />
       <p className='text-icon-nav'> Profile</p>
        </div>

    </div>
  )
}

export default Navbar