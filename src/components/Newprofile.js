import React, {useRef, useState} from 'react'
import Backedit from './features/Backedit'
import Inputfield from './features/Inputfield'
import Button from './features/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons' 
import Navbar from './features/Navbar'




const initialValues = {
  name: "", 
  title: "",
  projectlink: "",
  projecttitle: "",
  aboutme: "",
  jobposition: "",
  jobduration: "",
  institute: "",
  graduationyear: "",
  interests: "",
  email: "",
  socialmedia1: "",
  socialmedia2: "",
  }

function Newprofile() {


const [form, setForm] = useState(initialValues);


const handleChange = event => {
    const target = event.target                              
   event.preventDefault(); 
   setForm({...form, [target.name]: target.value})
  
   // const {name, value} = event.target.value; 
   // setValue({...values, [name]: value,})


}

const handleSubmit = event => {
event.preventDefault();
console.log(form)
}
   // console.log(title)
   // setForm({
   //  ...form, [event.target.name]: value
   //  })
   

  



  return (
   <>
      <Backedit />
      <div className='newprofile-container'>
         
         <form  onSubmit={handleSubmit} id="newprofile">
           
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
              <Inputfield 
              name="name" 
              placeholder="Add name" 
              value={form.name} 
              onChange={handleChange}  
              className="newprofile-input" />
              
                
              <Inputfield 
              name="title" 
              value={form.title} 
              onChange={handleChange} 
              placeholder="Add title (e.g. Full Stack Developer)" 
              className="newprofile-input" />
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
        
              <Inputfield 
              name="projectlink"  
              value={form.projectlink} 
              onChange={handleChange}  
              placeholder="Add project link" 
              className="newprofile-input" />
              
              <Inputfield 
              name="projecttitle"  
              value={form.projecttitle} 
              onChange={handleChange}  
              placeholder="Add project title" 
              className="newprofile-input" />
            </div>
          </div>
    



          <div className='newprofile-wrapper aboutmex-'>
            <div className='newprofile-smalltitle'>About me</div>
            <div className='input-container input-container-aboutme'>
              <label htmlFor="about me" className="label-about-me"> Add some more info about you. Don’t forget to mention what you are currently looking for. (internship, full time position...) </label>
              <Inputfield 
              placeholder="Add description" 
              className="newprofile-input" 
              id="aboutme"
              name="aboutme"  
              value={form.aboutme} 
              onChange={handleChange}  
               />         
            </div>
          </div>
    
    
          <div className='newprofile-wrapper workexp-'>
            <div className='newprofile-smalltitle'>Working experience</div>
            <div className='input-container'>
             
              <Inputfield 
              placeholder="Add job position" 
              className="newprofile-input"
              name="jobposition"  
              value={form.jobposition} 
              onChange={handleChange}   />    
              <Inputfield 
              placeholder="Add duration of employment" 
              className="newprofile-input"
              name="jobduration"  
              value={form.jobduration} 
              onChange={handleChange}
               /> 

              <a href="https://www.google.com/" className='add-another-link'>Add another working experience</a>    
            </div>
          </div>


          <div className='newprofile-wrapper eduaction-'>
            <div className='newprofile-smalltitle'>Education</div>
            <div className='input-container'>
             
              <Inputfield 
              placeholder="Add educational institute" 
              className="newprofile-input"
              name="institute"  
              value={form.institute} 
              onChange={handleChange}
               />    
              <Inputfield 
              placeholder="Add year of graduation" 
              className="newprofile-input"
              name="graduationyear"  
              value={form.graduationyear} 
              onChange={handleChange}
               /> 

              <a href="https://www.google.com/" className='add-another-link'>Add another education</a>    
            </div>
          </div>


          <div className='newprofile-wrapper interests-'>
            <div className='newprofile-smalltitle'>Interests</div>
            <div className='input-container'>
             
              <Inputfield 
              placeholder="Add interests divided by  -" 
              className="newprofile-input" 
              name="interests"  
              value={form.interests} 
              onChange={handleChange}
              />    
            </div>
          </div>


          <div className='newprofile-wrapper findmeon-'>
            <div className='newprofile-smalltitle'>Find me on</div>
            <div className='input-container'>
             
              <Inputfield 
              placeholder="Add your e-mail addresss"  
              className="newprofile-input"
               name="email"  
              value={form.email} 
              onChange={handleChange} />
              <Inputfield 
              placeholder="Add link to social media account" 
              className="newprofile-input"
              name="socialmedia1"  
              value={form.socialmedia1} 
              onChange={handleChange}
                />
              <Inputfield 
              placeholder="Add link to social media account"  
              className="newprofile-input"
              name="socialmedia2"  
              value={form.socialmedia2} 
              onChange={handleChange} />    
              
            </div>

           
          </div>
          <div className='newprofile-btn-container'>
           <Button className="btn" form="newprofile" value="Submit" /></div>
         
         </form> 

      </div>
      <Navbar />
   </>
  )
}

export default Newprofile