import React from 'react';
import Loginform from './features/Loginform'
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from 'react';





const Login = () => {

  const userRef = useRef();
  const errRef = useRef();
 
  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);


  //set focus on this when component loads
//   useEffect(() => {
//     userRef.current.focus();
// }, [])

  // empty out error messages if user or pw state is changed 
useEffect(() => {
    setErrMsg('');
}, [user, pwd])

const handleSubmit = async (e) => {
  e.preventDefault();


  // BACKEND SHOULD BE LINKED HERE. with AXIOS? and then you can delete the below:
  console.log(user, pwd);
  setUser('');
  setPwd('');
  setSuccess(true);
  // fetch to api (providing email and pw, and receiving succes (-> section)  )
  // store tokenin general state. allows user to do fetches in futer and stay authenticated

}

  return (
  	<>
    {success ? (
    <section className='success-login-page'>
    <h1>You are logged in!</h1>
    <br />
    <p className='p-success'>
      Your next step is to create a profile.
      </p>
     
       <Link to="/newprofile" className='succes-create-profile-btn'>Create profile</Link> 
      <p className='p-home'> Do you already have a profile?  <br />Go explore the Students: </p>
      <Link to="/home" className='link-home succes-create-profile-btn'> Home page</Link> 
    
    </section>
    
    ) : (

    <div className='login-page'> 

    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} >{errMsg}</p>

    <h1 className='login-text'> Login </h1> 
    
    <div>
    
    <form onSubmit={handleSubmit} className="login-form flex flex-col">
    
<div className="inner-label-wrap">
      <label className="inner-label" htmlFor="username"></label>
      <Loginform 
      className="full-width"
      type="text"
      id="username"
      placeholder="Username"
      name="username"
      value={user}
      onChange={(e) => setUser(e.target.value)}
      />
     
            <hr/>

    </div>
    <div className='inner-label-wrap'>
      <label className="inner-label" htmlFor="password"></label>
      <Loginform 
      className="full-width"
      type="password"
      id="password"
      placeholder="Password"
      name="password"
      value={pwd}
      onChange={(e) => setPwd(e.target.value)} 
      />
      <hr/>

    </div>
    <button className="btn password" type="submit" value="LOG IN"> Login </button> 
   

    <p className="inner-label user ">New user? <Link to="/register" className='a'>Join us!</Link> </p>

     </form> 

  </div>3

    </div>
    )}
    </>
  )
}

export default Login;