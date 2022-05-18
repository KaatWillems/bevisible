import React, { useEffect, useState } from 'react'
import Backedit from './features/Backedit'
 import pic1 from '../images/profile1.png'
 import becodelogo from '../images/becodelogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons' 
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons' 
import { faAt } from '@fortawesome/free-solid-svg-icons' 
import Navbar from './features/Navbar'
import profiledata from './profiledata.json'
import { faUpload } from '@fortawesome/free-solid-svg-icons' 
import Button from './features/Button'
import Popup from './features/Popup'

import Project from './features/Project'
import Inputfield from './features/Inputfield'

function Detailprofilepage() {


                              
  // useEffect(() => {
  //   // Replace ith API call
  //   const userData = profiledata


  //   console.log(profiledata)
  //
  const [form, setForm] = useState("");

  const [profile, setProfile] = useState(profiledata[0])

  let Tagsbutton = profile.tags.map((tag, index) => {
   return <button className='tagButton2'>{tag}</button> 
 })

const [show, setShow] = useState(false)
// function changeState() {
//     setShow(!show);  
// }

function makeAppear() {
  setShow(!show);
}


const [isOpen, setIsOpen] = useState(false)
const[isOpen1, setIsOpen1] = useState(false)

const togglePopUp = (popUp) => {
  console.log("ca a marché")
  if(popUp === "projects") {
    setIsOpen(!isOpen)
  }
  else if(popUp === "About"){
    setIsOpen1(!isOpen1)
  }
  
} 


 let Projectlist = profile.projects.map((project, index) => {
   return <Project projectinfo={project} key={`project_nbr_${index}`}  />
  
 })



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

 //Bookmarks
//  codes comes here


 
  return (
   <>
      <div className='Detailprofilepage-container'>
        <Backedit onClick={makeAppear}  />
  
        <div className='Pic-name-container'>
            <img src={pic1} alt="profilepic" className='profilepic'/>
            <h4 className='profilepage-name'> {profile.name}</h4>
            <h5 className='profilepage-subtitle'>{profile.title}</h5>
        </div>
        {/* Resume from projects - social media icons: */}
        <div className='profilepage-resume-container'> 
          <div className='projects-container'>

              <h4 className='profilepage-title'>Projects { show ? <input type="Button" onClick={() => togglePopUp("projects")} value="Edit" className='btn edit' /> : null } </h4>
             <div> {isOpen && <Popup
      content={<>
        <h2>Edit, delete or add projects</h2> 
         <form  onSubmit={handleSubmit} id="newprofile">
         <div className='newprofile-wrapper projects-'>
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
                 </form>  
                 {Projectlist} 
      </>}
      handleClose={() => togglePopUp("projects")}
    />} </div>
          
              <div className='projects-wrapper'>
                
                {Projectlist}
               
              </div>
              

          </div> 
  
          <div className='work-separator-line'></div> 
          
  
          <div className='aboutme-container'>
 
              <h4 className='profilepage-title'>About me  { show ? <input type="button" value="Edit"  onClick={() => togglePopUp("About")} className='btn edit' /> : null } </h4> 
              <div className='aboutme-text profilepage-text'>  </div>

              <div> {isOpen1 && <Popup
      content={<>
        <h2>Edit your description</h2> 
         
                <div>  {profile.about} </div>
      </>}
      handleClose={() => togglePopUp("About")}
    />} </div>
              
              {/* change to tag component Charlotte: */}
              <div className='tagKaat-container'>
               {Tagsbutton} { show ? <Button value="Edit" className='btn edit' /> : null } </div>
          </div>
  
          <div className='work-container'>
              <h4 className='profilepage-title'>Working experience { show ? <Button value="Edit"  className='btn edit' /> : null } </h4>
              <div className='rows'>
  
                  <div className='row work1'>
                    <div className='profilepage-text'> {profile.work[0].jobposition} </div>
                    <div className='duration'>{profile.work[0].duration}</div>
                  </div>
  
                  <div className='work-separator-line'></div> 
  
                  <div className='row work2'>
                    <div className='profilepage-text'>{profile.work[1].jobposition}</div>
                    <div className='duration'>{profile.work[1].duration}</div>
                  </div>
              </div>
          </div>
  
  
          <div className='education-container'>
              <h4 className='profilepage-title'>Education { show ? <Button value="Edit"  className='btn edit' /> : null } </h4>
             <div className='rows'>
                <div className='row education1'>
                      <div className='profilepage-text'> {profile.education[0].school} </div>
                      <div className='duration'>{profile.education[0].graduation}</div>
                    </div>
             </div>
          </div>
  
  
          <div className='interest-container'>
             <h4 className='profilepage-title'>Interests { show ? <Button value="Edit"  className='btn edit' /> : null } </h4>
             <div className='profilepage-text'> {profile.interests} </div>
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
            <h4 className='profilepage-title'>Connect with me { show ? <Button value="Edit" className='btn edit' /> : null } </h4>
            <div className='icon-wrapper'>
                <div className='icon-kaat'><FontAwesomeIcon icon={ faAt }/></div>
                <div className='icon-kaat'><FontAwesomeIcon icon={faLinkedin}/></div>
                <div className='icon-kaat'><FontAwesomeIcon icon={faGithubSquare}/></div>
                
            </div>
  
  
          </div>
  
  
  
        </div>
  
  
      </div>
      <Navbar />
   </>
    
  )
}

export default Detailprofilepage