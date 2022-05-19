import React, { useState } from 'react';
import Tags from './features/Tags'
import profiledata from './profiledata.json'




const Filter = (props) => {

  // let Cardslist = profiledata.map((card, index) => {
  //   return <Card cardinfo={card} key={`card_nbr_${index}`}  />
  // })

  // let Tagslist = props.cardinfo.tags.map((tag, index) => {
  //   return <Tags tag={tag} /> 
  //  })

    
      
  


    // const [profile, setProfile] = useState(profiledata[{},{}])

    // let TagslistX = profile.map((tag, index) => {
    //   console.log(profiledata);
    //   return <Tags tag={tag} key={`tag_nbr_${index}`} />
      
    //  })
    
    let TagslistX = profiledata.map((x, i) => {

      return(
      
          <div className="student" key={i}>
          
          <div> 
            { x.tags.map((tag) => {
              return (
              <Tags tag={tag}/>
              )
              })
              } 

            {/* <Tags tag={x.tags}  /> */}
            
             
          </div>
        </div>  
      
      
              )
    })
  

    console.log(TagslistX);




  return (
    <div className='filter-container'>

      <h2 className='filter-title'> Filter profiles by:</h2>

      <div className='filter-skill-container'>

          <div> by Skills</div>
          
          <div> {TagslistX} </div>



      </div>






    </div>
  )
}

export default Filter;