import React from 'react';
import Loginform from './features/Loginform'


const Login = (props) => {
  return (
  	<>
    
    <div className='login-page'> 
    <h1 className='login-text'> Login </h1> 
    <Loginform />
    </div>

    </>
  )
}

export default Login;