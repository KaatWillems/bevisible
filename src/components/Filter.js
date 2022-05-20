import React, { useState } from 'react';
import Tags from './features/Tags'
import profiledata from './profiledata.json'
import Button from './features/Button'




const Filter = (props) => {

    //=== TO RETRIEVE THE TAGS (array of tags in an array of objects)
  let newArr = []
  profiledata.forEach((profile) => {
    profile.tags.forEach((tag) => {
      newArr.push(tag)
    })
  })
  // console.log(newArr)
  let Tagslist = [...new Set(newArr)];   
  // console.log(Tagslist)


  //=== TO RETRIEVE THE 'SEARCHING FOR'

  let searchArr = []
    let availArr = profiledata.map((profile) => {
      searchArr.push(profile.searching)
    })

    let searchingFor = [...new Set(searchArr)]
         
    
  
    return(  
      <div className='filter-container'>    
          <div className='filter-title'> Filter profiles by:
          </div>

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


           <div className='filter-skill-container'>
            <div className='filter-by-title'> Availability</div>
                      
              <div className="filter-tags"> 
              {searchingFor.map((search) => {
                    
                    return (
                      <Tags tag={search}/>
                      )
                    })
                    } 
               
              </div>
           </div>  

           <Button value="Apply" className="btn btn-big m-b-30"/> 
      </div>     
    
        )
  }

export default Filter;