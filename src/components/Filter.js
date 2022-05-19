import React, { useState } from 'react';
import Tags from './features/Tags'
import profiledata from './profiledata.json'




const Filter = (props) => {

  let newArr = []
  profiledata.forEach((profile) => {
    profile.tags.forEach((tag) => {
      newArr.push(tag)
    })
  })
  // console.log(newArr)
  let Tagslist = [...new Set(newArr)]
   
  // console.log(Tagslist)
  
    return(  
      <div className='filter-container'>
      
          <div className='filter-title'> Filter profiles by:</div>
          <div className='filter-skill-container'>
            <div className='filter-by-title'> Skills</div>
                      
              <div className="filter-tags"> 
                  {Tagslist.map((tag) => {
                    
                  return (
                    <Tags tag={tag}/>
                    )
                  })
                  } 
              </div>
           </div>  
      </div>     
    
        )
  }

export default Filter;