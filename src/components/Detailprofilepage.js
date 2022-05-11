import React from 'react'
import Backedit from './features/Backedit'
 import pic1 from '../images/profile1.png'

function Detailprofilepage() {
  return (
    <div className='Detailprofilepage-container'>
      <Backedit />

      <div className='Pic-name-container'>
          <img src={pic1} alt="profilepic" className='profilepic'/>
          <h4 className='profilepage-name'> Charka Smith</h4>
          <h5 className='profilepage-subtitle'>Junior Full Stack Developer</h5>
      </div>
      {/* Resume from projects - social media icons: */}
      <div className='profilepage-resume-container'>
        <div className='projects-container'>
            <h4 className='profilepage-title'>Projects </h4>
            <div className='profilepage-text'> *projects to come here*</div>
            <hr />

        </div> 

        <div className='aboutme-container'>
            <h4 className='profilepage-title'>About me </h4>
            <div className='aboutme-text profilepage-text'> Full Stack Web Developer in the making. Student at Becode, currently looking for internship Aug & Sep. </div>
            
            {/* change to tag component Charlotte: */}
            <div className='tagKaat-container'>
              <button className='tagKaat'>Javascript</button> <button className='tagKaat'>React</button> <button className='tagKaat'>Python</button>
            </div>
        </div>

        <div className='work-container'>
            <h4 className='profilepage-title'>Working experience</h4>
            <div className='workrows'>
                <div className='workrow row1'>
                  <div className='profilepage-text'> BeCode Web Developer Trainee </div>
                  <div className='work-duration'>7 months</div>
                </div>
                <div className='work-separator-line'></div> 
                <div className='workrow row2'>
                  <div className='profilepage-text'> Professional Candy Taster </div>
                  <div className='work-duration'>2 years</div>
                </div>
            </div>

        </div>

      </div>


    </div>
  )
}

export default Detailprofilepage