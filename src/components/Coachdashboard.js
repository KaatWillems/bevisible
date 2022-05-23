import React from 'react';
import pic1 from '../images/profile1.png'

const Coachdashboard = (props) => {
  return (
    <div> 
		    <div className="newprofile-top-container dashboard">

		    	<h2 class="profilepage-name"> Hello Coach "Name" </h2>
		    	<a className="a-edit dashboard"> Create a new promotion </a>

		    </div>

			   
			    <div className="newprofile-container"> 
			    	<h4 class="newprofile-subtitle"> New profiles to validate </h4>
			    	<div className='projects-container dashboard'> 
			    		<div className='dashboard-Pic-name-container'>
			   				 <img src={pic1} alt="profilepic" className='profilepic dash'/>
								<h5 className="newname"> Kaalotte Smith </h5>
						</div>
				
							<div className="promotion">  <label for="promotion">Choose a promotion:</label>
										<select id="promotion" name="promotion">
										  <option value="1">1</option>
										  <option value="2">2</option>
										  <option value="3">3</option>
										  <option value="4">4</option>
										</select>  
																	</div> 
				
								<div className="dashboardbtncontainer"> 
									{/*<button className="btn coachdash assign"> Assign promotion </button>*/}
									<button className="btn coachdash">  Validate </button>
				 				</div> 
			    	</div>
			    
			    	

	   			 <div className='projects-container dashboard'> 
	   				 <div className='dashboard-Pic-name-container'>
					    <img src={pic1} alt="profilepic" className='profilepic dash'/>
						<h5 className="newname"> Kaalotte Smith </h5>
					</div>
						<div className="promotion">  <label for="promotion">Choose a promotion:</label>
										<select id="promotion" name="promotion">
										  <option value="1">1</option>
										  <option value="2">2</option>
										  <option value="3">3</option>
										  <option value="4">4</option>
										</select>  
																	</div>  
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