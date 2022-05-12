import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons' 

const Searchinput = (props) => {
  return (
<form className="search-tools">
      <div className="search-bar">
    <div className="search-container">
      <input
        className="search-input"
        id="search-input"
        name="searchinput"
        type="text"
        placeholder="Type your search"
      />
      <label for="search-input" className="search-icon">
        <FontAwesomeIcon icon={faSearch}> 
        </FontAwesomeIcon>
      </label>
    </div>
    </div>
    </form>

  )
}

export default Searchinput;