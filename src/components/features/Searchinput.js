import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons' 
import Filter from '../Filter'



const Searchinput = () => {
  return (
          <>
<div className="search-tools">
      <form className="search-bar">
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
    </form>
    <div> 
    <Filter className="filter" />
    </div>
    </div>
</>
  )
}

export default Searchinput;