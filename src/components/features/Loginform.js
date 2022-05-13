import React from 'react';

const Loginform = (props) => {
  return (
    <div>
    
    	<form className="login-form flex flex-col">
    	
<div className="inner-label-wrap">
				<label className="inner-label" for="email">Email</label>
				<input className="full-width" type="email" id="email" name="email"/>
				      <hr/>

			</div>
			<div className='inner-label-wrap'>
				<label className="inner-label" for="password">Password</label>
				<input className="full-width" type="password" id="password" name="password" />
				<hr/>

			</div>
			<button className="password" type="submit" value="LOG IN"> Login </button>

    	 </form> 
    </div>
  )
}

export default Loginform;