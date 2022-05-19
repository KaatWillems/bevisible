
import React, {useState} from 'react';
import profiledata from '../profiledata.json'
import Inputfield from './Inputfield'



const PopUpInterests = (props) => {

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
  	<>
    <div className='profilepage-text'> {profile.interests} </div>
    <div className='input-container'>
             
              <Inputfield 
              placeholder="Add interests divided by  -" 
              className="newprofile-input" 
              name="interests"  
              value={form.interests} 
              onChange={handleChange}
              />    
            </div>
    </>
  )
}

export default PopUpInterests;