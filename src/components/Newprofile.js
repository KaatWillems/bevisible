import React from 'react'
import Backedit from './features/Backedit'
import Inputfield from './features/Inputfield'
import Button from './features/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons' 
import Navbar from './features/Navbar'

function Newprofile() {
  return (
   <>
      <Backedit />
      <div className='newprofile-container'>
         
         <form id="newprofile">
           
          <div className='newprofile-top-container'>
              <h1 className='newprofile-title'> Your profile</h1>
              <div className='newprofile-subtitle'>Enter your resume information.</div>
              
              <input
                className="newprofile-uploadinput"
                id="uploadprofilepic"
                name="uploadprofilepic"
                type="file"
                placeholder="Upload a profile picture"
              />
               <div className='blue-circle'> <label htmlFor="uploadprofilepic" className='label-upload-profile-pic'>Upload profile picture</label></div> 
              
              
          </div>
    
  
          <div className='newprofile-wrapper name-title'>
            <div className='input-container'>    
              <Inputfield placeholder="Add name" className="newprofile-input" />
              
              <Inputfield placeholder="Add title (e.g. Full Stack Developer)" className="newprofile-input" />
            </div>
          </div>
    
          <div className='newprofile-wrapper projects-'>
            <div className='newprofile-smalltitle'>Projects</div>
            <div className='input-container'>
  
            <div className="newprofile-uploadinput-container">
              <input
                className="newprofile-uploadinput"
                id="uploadfile"
                name="uploadfile"
                type="file"
                placeholder="Upload a project picture"
              />
              <label for="uploadfile" className="upload-icon-label">  <FontAwesomeIcon icon={faUpload} className='upload-icon'/> <br /> Upload picture  </label>
              <div>
                
                 
              </div>          
              
            </div>        
        
              <Inputfield placeholder="Add project link" className="newprofile-input" />
              
              <Inputfield placeholder="Add project title" className="newprofile-input" />
            </div>
          </div>
    



          <div className='newprofile-wrapper aboutmex-'>
            <div className='newprofile-smalltitle'>About me</div>
            <div className='input-container input-container-aboutme'>
              <label htmlFor="about me" className="label-about-me"> Add some more info about you. Don’t forget to mention what you are currently looking for. (internship, full time position...) </label>
              <Inputfield placeholder="Add description" className="newprofile-input" id="aboutme" />         
            </div>
          </div>
    
    
          <div className='newprofile-wrapper workexp-'>
            <div className='newprofile-smalltitle'>Working experience</div>
            <div className='input-container'>
             
              <Inputfield placeholder="Add job position" className="newprofile-input" />    
              <Inputfield placeholder="Add duration of employment" className="newprofile-input" /> 

              <a href="https://www.google.com/" className='add-another-link'>Add another working experience</a>    
            </div>
          </div>


          <div className='newprofile-wrapper eduaction-'>
            <div className='newprofile-smalltitle'>Education</div>
            <div className='input-container'>
             
              <Inputfield placeholder="Add educational institute" className="newprofile-input" />    
              <Inputfield placeholder="Add year of graduation" className="newprofile-input" /> 

              <a href="https://www.google.com/" className='add-another-link'>Add another education</a>    
            </div>
          </div>


          <div className='newprofile-wrapper interests-'>
            <div className='newprofile-smalltitle'>Interests</div>
            <div className='input-container'>
             
              <Inputfield placeholder="Add interests divided by  -" className="newprofile-input" />    
            </div>
          </div>


          <div className='newprofile-wrapper findmeon-'>
            <div className='newprofile-smalltitle'>Find me on</div>
            <div className='input-container'>
             
              <Inputfield placeholder="Add link to social media account"  className="newprofile-input" />
              <Inputfield placeholder="Add link to social media account"  className="newprofile-input" />
              <Inputfield placeholder="Add link to social media account"  className="newprofile-input" />    
              
            </div>

           
          </div>
         
         </form> 
         <div className='newprofile-btn-container'>
           <Button form="newprofile" value="Submit" /></div>
      </div>
      <Navbar />
   </>
  )
}

export default Newprofile