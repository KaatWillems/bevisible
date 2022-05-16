import React from 'react';
import Registerform from './features/Registerform'
import { useState } from 'react';


const Register = (props) => {

   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState(''); 

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
 
  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
       setSubmitted(false);
  };
 
  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };

   // Showing success message
   const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <p>User {name} successfully registered.</p>
      </div>
    );
  };
  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <p>Please enter all the fields</p>
      </div>
    );
  };

  return (
  	<>
    

    <div className='login-page'> 
    <h1 className='login-text'> Register </h1> 
    {/* <Registerform
     />  */}
     <div>
    
    <form className="login-form flex flex-col">

    <div className="inner-label-wrap">
      <label className="inner-label" for="email">Name</label>
      <input onChange={handleName} className="full-width" type="name" id="name" name="name" />
            <hr/>

    </div>
    
<div className="inner-label-wrap">
      <label className="inner-label" for="email">Email</label>
      <input onChange={handleEmail} className="full-width" type="email" id="email" name="email"/>
            <hr/>

    </div>
    <div className='inner-label-wrap'>
      <label className="inner-label" for="password">Password</label>
      <input onChange={handlePassword} className="full-width" type="password" id="password" name="password" />
      <hr/>

    </div>



    <button onClick={handleSubmit} className="password" type="submit" value="Register"> Register </button>
    
     </form> 
 {/* Calling to the methods */}
 <div className="messages">
        {errorMessage()}
        {successMessage()}
    </div>

  </div>
  


    </div>

    


    </>
  )
}

export default Register;
