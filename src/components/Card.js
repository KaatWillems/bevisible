import React from 'react';
 import pic1 from '../images/profile1.png'
import Tags from './features/Tags'
import Location from './features/Location'

const Card = () => {
  return (
    <div className="cards-container"> 
    <container className="card">
    <div className='Pic-name-container'>
    <img src={pic1} alt="profilepic" className='profilepic'/>
    <h4 className='profilepage-name'> Charka Smith</h4>
    <h5 className='profilepage-subtitle'>Junior Full Stack Developer</h5>
    <Tags />
    <Location />
    </div> 
     </container> 

      <container className="card">
    <div className='Pic-name-container'>
    <img src={pic1} alt="profilepic" className='profilepic'/>
    <h4 className='profilepage-name'> Charka Smith</h4>
    <h5 className='profilepage-subtitle'>Junior Full Stack Developer</h5>
    <Tags /> 
    <Location />
    </div> 
     </container> 

      <container className="card">
    <div className='Pic-name-container'>
    <img src={pic1} alt="profilepic" className='profilepic'/>
    <h4 className='profilepage-name'> Charka Smith</h4>
    <h5 className='profilepage-subtitle'>Junior Full Stack Developer</h5>
    <Tags />
    <Location />
    </div> 
     </container> 

         <container className="card">
    <div className='Pic-name-container'>
    <img src={pic1} alt="profilepic" className='profilepic'/>
    <h4 className='profilepage-name'> Charka Smith</h4>
    <h5 className='profilepage-subtitle'>Junior Full Stack Developer</h5>
    <Tags />
    <Location />
    </div> 
     </container> 

     <container className="card">
    <div className='Pic-name-container'>
    <img src={pic1} alt="profilepic" className='profilepic'/>
    <h4 className='profilepage-name'> Charka Smith</h4>
    <h5 className='profilepage-subtitle'>Junior Full Stack Developer</h5>
    <Tags />
    <Location />
    </div> 
     </container> 
    </div> 
  )
}

export default Card; 


