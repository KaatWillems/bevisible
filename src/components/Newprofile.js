import React from 'react'
import Backedit from './features/Backedit'
import Inputfield from './features/Inputfield'

function Newprofile() {
  return (
    
    <div className='newprofile-container'>
       <Backedit />
       <form>
         
        <div className='newprofile-top-container'>
            <h1 className='newprofile-title'> Your profile</h1>
            <div className='newprofile-subtitle'>Enter your resume information.</div>
            <div className='blue-circle'>
              <div className='uploadprofilepic'>Upload profile picture</div>
              </div>
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
              type="text"
              placeholder="Upload a project picture"
            />
            <label for="uploadfile" className="upload-icon">

              
            </label>
          </div>

      
      
            <Inputfield placeholder="Add project link" className="newprofile-input" />
            
            <Inputfield placeholder="Add project title" className="newprofile-input" />
          </div>
        </div>
  
        <div className='newprofile-wrapper aboutmex-'>
          <div className='newprofile-smalltitle'>About me</div>
          <div className='input-container'>
      
            <Inputfield placeholder="Add " className="newprofile-input" />
            
             
          </div>
        </div>
  
  
  

       </form> 
    </div>
  )
}

export default Newprofile