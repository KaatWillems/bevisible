import React, {useState} from 'react';
import profiledata from '../profiledata.json'
import Inputfield from './Inputfield'

const PopupWork = (props) => {

const [profile, setProfile] = useState(profiledata[0])
const [form, setForm] = useState("");



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






  return (
    <div>
    	 <div className='row work1'>
                    <div className='profilepage-text'> {profile.work[0].jobposition} </div>
                    <div className='duration'>{profile.work[0].duration}</div>
                  </div>
  
                  <div className='work-separator-line'></div> 
  
                  <div className='row work2'>
                    <div className='profilepage-text'>{profile.work[1].jobposition}</div>
                    <div className='duration'>{profile.work[1].duration}</div>
                  </div>
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

    </div>
  )
}

export default PopupWork;