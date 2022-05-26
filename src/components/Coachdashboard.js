import React, {useState} from 'react';
// import pic1 from '../images/profile1.png'
import Coachdashstudent from './features/Coachdashstudent';
import Inputfield from './features/Inputfield'

const Coachdashboard = (props) => {

	const [form, setForm] = useState();


const handleChange = event => {
    const target = event.target                              
   event.preventDefault(); 
   setForm({...form, [target.name]: target.value}) 
}

  return (
    <div> 
    	 <div className="newprofile-top-container dashboard">
		    <h2 className="profilepage-name dashboardcoach"> Hello Coach "Name" </h2>
		    <div className="new-promotion"> 
		    	<h4 className="dashboard"> Create a new promotion: </h4>
		    	<Inputfield name="promotion"
					value=""
					onChange={handleChange}
					type="text" 
					placeholder="Type here" 
					className="promotion-input"
					/> 
			 </div>
		</div>
		    
		 <div className="newprofile-container"> 
			<h4 className="newprofile-subtitle"> New profiles to validate </h4>
			<Coachdashstudent />

			<Coachdashstudent />
	     			
		</div> 
	</div>
    

  )
}

export default Coachdashboard;