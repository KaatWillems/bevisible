import React, {useState} from 'react';
import Inputfield from './Inputfield'
import { faUpload } from '@fortawesome/free-solid-svg-icons' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Project from './Project'
import profiledata from '../profiledata.json'

const PopupProjects = (props) => {

const [form, setForm] = useState("");
const [profile, setProfile] = useState(profiledata[0])
 
 const handleChange = event => {
    const target = event.target                              
   event.preventDefault(); 
   setForm({...form, [target.name]: target.value})
   // const {name, value} = event.target.value; 
   // setValue({...values, [name]: value,})
	}

	const handleSubmit = event => {
	event.preventDefault();
	} 

 let Projectlist = profile.projects.map((project, index) => {
   return <div className="projects-wrapper"> <Project projectinfo={project} key={`project_nbr_${index}`} /> 
    <input type="button" value="Edit" className='btn edit popup'/> <input type="button" value="Delete" className='btn edit popup'/> </div>  })

  return (
    <>
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
                  <div className='project-container'>  
                 {Projectlist} 
                 </div>
      </>
  )
}

export default PopupProjects;