import React from 'react';
import Loginform from './features/Loginform'
import { useState } from 'react';



const Login = () => {

  const [loginform, setLoginform] = useState({
    email:"",
    password:""
  })


  const handleChange= event => {
    event.preventDefault()
    const target = event.target;
    setLoginform({...loginform, [target.name]: target.value})
    
    console.log(target)

  }

  const handleSubmit = event => {
    event.preventDefault();
    console.log(loginform)
  }


  return (
  	<>
    
    <div className='login-page'> 
    <h1 className='login-text'> Login </h1> 
    
    <div>
    
    <form className="login-form flex flex-col">
    
<div className="inner-label-wrap">
      <label className="inner-label" for="email"></label>
      <Loginform 
      className="full-width"
      type="email"
      id="email"
      placeholder="Email"
      name="email"
      value={loginform.email}
      onChange={handleChange}
      />
     
            <hr/>

    </div>
    <div className='inner-label-wrap'>
      <label className="inner-label" for="password"></label>
      <Loginform 
      className="full-width"
      type="password"
      id="password"
      placeholder="Password"
      name="password"
      value={loginform.password}
      onChange={handleChange}  />
      <hr/>

    </div>
    <button onClick={handleSubmit} className="password" type="submit" value="LOG IN"> Login </button>
    <p className="inner-label user">New User? <a> Join us! </a> </p>
     </form> 

  </div>
    </div>

    </>
  )
}

export default Login;