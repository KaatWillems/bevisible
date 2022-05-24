import React, {useState} from 'react';
import pic1 from '../images/profile1.png'
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

		    	<h2 class="profilepage-name"> Hello Coach "Name" </h2>
		    	 <div className="new-promotion"> 
		    	<h4 className="dashboard"> Create a new promotion: </h4>
		    	    <Inputfield name="promotion"
				     value={form.promotion}
				     onChange={handleChange}
				     type="text" 
				     placeholder="Type here" 
				     className="promotion-input"
				     /> 
				     </div>
		    </div>
		    

			   
			    <div className="newprofile-container"> 
			    	<h4 class="newprofile-subtitle"> New profiles to validate </h4>


			    	<div className='pprojects-container dashboard'> 
					
			    		<div className='dashboard-Pic-name-container'>
			   				 <img src={pic1} alt="profilepic" className='profilepic dash'/>
								<h5 className="newname"> Kaalotte Smith </h5>
						</div>
						<div className='dashboard-separator-line '></div>
				
							<div className="promotion"> 
							 <label for="promotion">Choose a promotion:</label>
										<select id="promotion" name="promotion">
										  <option value="1">1</option>
										  <option value="2">2</option>
										  <option value="3">3</option>
										  <option value="4">4</option>
										</select>  
																	</div> 
																	<div 	className='dashboard-separator-line '></div>
				
								<div className="dashboardbtncontainer"> 
									{/*<button className="btn coachdash assign"> Assign promotion </button>*/}
									<button className="btn coachdash">  Validate </button>
				 				</div> 
			    	</div>
			    
			    	

	   			 <div className='pprojects-container dashboard'> 
	   				 <div className='dashboard-Pic-name-container'>
					    <img src={pic1} alt="profilepic" className='profilepic dash'/>
						<h5 className="newname"> Kaalotte Smith </h5>
					</div>
					<div 	className='dashboard-separator-line '></div>
						<div className="promotion">  <label 		for="promotion">Choose a promotion:</label>
						<select id="promotion" name="promotion">
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
						</select>  
																	</div>  

																	<div 	className='dashboard-separator-line '></div>
							<div className="dashboardbtncontainer"> 
								{/*<button className="btn coachdash assign"> Assign promotion </button>*/}
								<button className="btn coachdash">  Validate </button>
	     					</div>
	     			</div>
				</div> 
	</div>
    

  )
}

export default Coachdashboard;