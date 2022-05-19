import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons' 
import { faFilter } from '@fortawesome/free-solid-svg-icons' 
import Filter from '../Filter'
import Button from './Button'



const Searchinput = () => {

  const [openFilter, setOpenFilter] = useState(false)
// function changeState() {
//     setShow(!show);  
// }

const displayFilter = (filter) => {
  setOpenFilter(!openFilter)
}








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
    {/* <Filter className="filter" onClick={displayFilter}  /> */}

    <FontAwesomeIcon icon={faFilter}className="filter" value="Filter" onClick={displayFilter}  /> 
     
     
   

  

    </div>
   
   
    </div>
    <div> {openFilter && <Filter />}   </div>
</>
  )
}

export default Searchinput;