import React from 'react';
import Loginform from './features/Loginform'
import { Link } from "react-router-dom";
import { useRef, useState, useEffect, useContext, createContext } from 'react';
import PropTypes from 'prop-types'
//import { useNavigate } from 'react-router-dom';
import { setCookie, UserContext } from '../App'
import Navbar from './features/Navbar';

import ReactDOM from "react-dom/client";

//const UserContext = createContext()


const Login = (props)  => {

  const userRef = useRef();
  const errRef = useRef();
  // const [token, setToken] = useState();
  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  // const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  const {setToken} = useContext(UserContext)
  //const navigate = useNavigate();
  
  console.log( props.id )


 

const handleSubmit = (e) => {
  e.preventDefault();
  
  const loginUser = async (user, pwd, props) => {
  fetch('https://cors-anywhere.herokuapp.com/https://bevisible-backend.herokuapp.com/user/signin', {
      method: 'POST',
      //  mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: user, password: pwd
      }),
    })
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      setToken(data.accessToken)
      setCookie('token', data.accessToken, 7)
      setSuccess(true)
      console.log(data)
      //console.log(data.id)

      //console.log({id={`props.id`}})
       //
    props.setId(data.id) 
      

      
       

        // props.setId(props.data.id)
        // console.log(props.id)
      
      
      // const token = JSON.stringify(data.accessToken)
      // setToken(token)
      // setCookie('token', token, 7)
      
    })
    .catch((err) => {
      console.error(err)
    })
  }
  loginUser(user, pwd)
  
 
}

  
    // setToken(true)
    // token ? setSuccess(true) : null  

   
    //setToken(data.accessToken);
    // console.log(token)
   
    //  {
    
    //   //navigate("success", { replace: true });
    // }
    //console.log(token)
    
 

// setUser('');
//   setPwd('');
//   setSuccess(true);

 

    // setData(data.message)

 



  return (
  	<>
      {console.log( props.id )}
   
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
      name="user"
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
      name="pwd"
      onChange={(e) => setPwd(e.target.value)} 
      />
      <hr/>

    </div>
    <button className="btn password" type="submit" value="LOG IN" onClick={setId}> Login </button>

    <p className="inner-label user ">New user? <Link to="/register" className='a'>Join us!</Link> </p>

     </form> 

  </div>

    </div>
    )}
    </>
  )
}

// Login.propTypes = {
//   setToken: PropTypes.func.isRequired
// }

export default Login;