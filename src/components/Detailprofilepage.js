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
import Header from './features/Header'
import Project from './features/Project'
import Inputfield from './features/Inputfield'
import PopupProjects from './features/PopupProjects'
import PopupAbout from './features/PopupAbout'
import PopupTags from './features/PopupTags'
import PopupWork from './features/PopupWork'
import PopupEducation from './features/PopupEducation'
import PopUpInterests from './features/PopUpInterests'

function Detailprofilepage() {


                              
  // useEffect(() => {
  //   // Replace ith API call
  //   const userData = profiledata


  //   console.log(profiledata)
  //
  const [form, setForm] = useState(""); 

  const [profile, setProfile] = useState(profiledata[0]) 

  console.log(profile)

 //  let Tagsbutton = profile.tags.map((tag, index) => {
 //   return <button className='tagButton2'>{tag}</button> 
 // })


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
const[isOpen2, setIsOpen2] = useState(false)
const[isOpen3, setIsOpen3] = useState(false)
const[isOpen4, setIsOpen4] = useState(false)
const[isOpen5, setIsOpen5] = useState(false)

const togglePopUp = (popUp) => {
  console.log("ca a marché")
  if(popUp === "projects") {
    setIsOpen(!isOpen)
  }
  if(popUp === "About"){
    setIsOpen1(!isOpen1)
  }
  if(popUp === "Tags"){
    setIsOpen2(!isOpen2)
  }
  if(popUp === "Work"){
    setIsOpen3(!isOpen3)
  }
  if(popUp === "Education"){
    setIsOpen4(!isOpen4)
  } 
  if(popUp === "Interests"){
    setIsOpen5(!isOpen5)
  }
}

 let Projectlist = profile.projects.map((project, index) => {
   return <Project projectinfo={project} key={`project_nbr_${index}`}  />
  
 })




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
                    content={<PopupProjects /> }
                    handleClose={() => togglePopUp("projects")}
            />} 
            </div>
          
              <div className='projects-wrapper'>
                
                {Projectlist}
               
              </div>
              

          </div> 
  
          <div className='work-separator-line'></div> 
          
  
          <div className='aboutme-container'>
 
              <h4 className='profilepage-title'>About me  { show ? <input type="button" value="Edit"  onClick={() => togglePopUp("About")} className='btn edit' /> : null } </h4> 
              <div className='aboutme-text profilepage-text'>  </div>

              <div> {isOpen1 && <Popup
      content={<PopupAbout />}
      handleClose={() => togglePopUp("About")}
    />} </div>
              
              {/* change to tag component Charlotte: */}
              <div className='tagKaat-container'>
               {Tagsbutton} { show ? <input  type="button" value="Edit" onClick={() => togglePopUp("Tags")} className='btn edit' /> : null } </div>
          </div>
          <div> {isOpen2 && <Popup
      content={<PopupTags />}
      handleClose={() => togglePopUp("Tags")}
    />} </div>
  
          <div className='work-container'>
              <h4 className='profilepage-title'>Working experience { show ? <input type="button" value="Edit" onClick={() => togglePopUp("Work")}  className='btn edit' /> : null } </h4>
              <div className='rows'>
              <div> {isOpen3 && <Popup
              content={<PopupWork />}
              handleClose={() => togglePopUp("Work")}
            />} </div>
          
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
              <h4 className='profilepage-title'>Education { show ? <input value="Edit" type="button" onClick={() => togglePopUp("Education")} className='btn edit' /> : null } </h4>
             <div className='rows'>
                <div className='row education1'>
                      <div className='profilepage-text'> {profile.education[0].school} </div>
                      <div className='duration'>{profile.education[0].graduation}</div>
                    </div>
             </div>
          </div>
          <div> {isOpen4 && <Popup
              content={<PopupEducation />}
              handleClose={() => togglePopUp("Education")}
            />} </div>
  
  
          <div className='interest-container'>
             <h4 className='profilepage-title'>Interests { show ? <input value="Edit" type="button" onClick={() => togglePopUp("Interests")} className='btn edit' /> : null } </h4>
             <div className='profilepage-text'> {profile.interests} </div>
          </div>
             <div> {isOpen5 && <Popup
                    content={<PopUpInterests />}
                    handleClose={() => togglePopUp("Interests")}
                  />} </div>
        
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