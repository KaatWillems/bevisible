import React, {useState} from 'react';
 import pic1 from '../images/profile1.png'
import Tags from './features/Tags'
import Location from './features/Location'

const Card = (props) => {

 // const [profile, setProfile] = useState(profiledata[0]) 
let Tagslist = props.cardinfo.tags.map((tag, index) => {
  return <Tags tag={tag} /> 
 })



  return (
    
    //  
    // {c.cards.map((card) => (
<>
  
    <container className="card">
    <div className='Pic-name-container'>
    <img src={pic1} alt="profilepic" className='profilepic'/>
    <h4 className='profilepage-name'>{props.cardinfo.name} </h4>
    <h5 className='profilepage-subtitle'>{props.cardinfo.title}</h5>
    </div>
    <div> {Tagslist} </div>
    <Location />
     </container> 
    
</>
  ) 
}
export default Card; 

    