import React, {useState} from 'react';
import profiledata from '../profiledata.json'
import Inputfield from './Inputfield'


const PopupEducation = (props) => {

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
   
     <div className='rows'>
                <div className='row education1'>
                      <div className='profilepage-text'> {profile.education[0].school} </div>
                      <div className='duration'>{profile.education[0].graduation}</div>
                    <input type="button" value="Edit" className='btn edit popup'/> <input type="button" value="Delete" className='btn edit popup'/>
                  </div>


          <div className='newprofile-wrapper eduaction-'>
            <div className='newprofile-smalltitle'>Add another education</div>
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
            </div>
         </div>

    </div>
  )
}

export default PopupEducation;