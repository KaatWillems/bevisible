import React from 'react'
import Backedit from './features/Backedit'
 import pic1 from '../images/profile1.png'
 import becodelogo from '../images/becodelogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons' 
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons' 
import { faDribbbleSquare } from '@fortawesome/free-brands-svg-icons' 
import Navbar from './features/Navbar'


function Detailprofilepage() {
  return (
   <>
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
          </div> 
  
          <div className='work-separator-line'></div> 
          
  
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
              <div className='rows'>
  
                  <div className='row work1'>
                    <div className='profilepage-text'> BeCode Web Developer Trainee </div>
                    <div className='duration'>7 months</div>
                  </div>
  
                  <div className='work-separator-line'></div> 
  
                  <div className='row work2'>
                    <div className='profilepage-text'> Professional Candy Taster </div>
                    <div className='duration'>2 years</div>
                  </div>
              </div>
          </div>
  
  
          <div className='education-container'>
              <h4 className='profilepage-title'>Education</h4>
             <div className='rows'>
                <div className='row education1'>
                      <div className='profilepage-text'> School of Life </div>
                      <div className='duration'>2016</div>
                    </div>
             </div>
          </div>
  
  
          <div className='interest-container'>
             <h4 className='profilepage-title'>Interests</h4>
             <div className='profilepage-text'> Krav Maga - Making pizza - Gaming </div>
          </div>
  
  
          <div className='appraisal-container'>
              <h4 className='profilepage-title'>Appraisals</h4>
              <div className='rows'>
                <div className='row appraisal1'>
                      <img src={becodelogo} className="becodelogo" alt="logo becode"/>
                      <div className='name- comment-wrapper'>
                        <div className='name-appraisal'> Coach Snoop Diogo
                        </div>
                        <div className='profilepage-text'> Pretty shit student tbh </div>
                        </div>
                      <div className='duration'>2 months ago</div>
                    </div>
                </div>    
          </div>
  
          <div className='social-container'>
            <h4 className='profilepage-title'>Find me on</h4>
            <div className='icon-wrapper'>
                <div className='icon-kaat'><FontAwesomeIcon icon={faLinkedin}/></div>
                <div className='icon-kaat'><FontAwesomeIcon icon={faGithubSquare}/></div>
                <div className='icon-kaat'><FontAwesomeIcon icon={faDribbbleSquare}/></div>
            </div>
  
  
          </div>
  
  
  
        </div>
  
  
      </div>
      <Navbar />
   </>
    
  )
}

export default Detailprofilepage