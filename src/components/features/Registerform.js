import React from 'react';

const Registerform = (props) => {
  return (
    <div>
    
    	<form className="login-form flex flex-col">

    	<div className="inner-label-wrap">
				<label className="inner-label" for="email">Name</label>
				<input className="full-width" type="name" id="name" name="name"/>
				      <hr/>

			</div>
    	
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



			<button className="password" type="submit" value="Registe"> Register </button>
			
    	 </form> 

    </div>
  )
}

export default Registerform;