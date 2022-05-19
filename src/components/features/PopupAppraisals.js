
import React, {useState} from 'react';
import profiledata from '../profiledata.json'
import Inputfield from './Inputfield'

const PopupAppraisals = (props) => {
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
  	<h4> Add a new appraisal </h4>
    <Inputfield 
              placeholder="Add a new appraisal" 
              className="newprofile-input"
              name="institute"  
              value={form.institute} 
              onChange={handleChange}
               />  

               <div> Add date and time automatically </div>  
              
            

              </>
  )
}

export default PopupAppraisals;