import React from 'react';
import Loginform from './features/Loginform'
import { Link } from "react-router-dom";
import { useRef, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types'
//import { useNavigate } from 'react-router-dom';
import { setCookie, UserContext } from '../App'


const Login = ()  => {

  const userRef = useRef();
  const errRef = useRef();
  // const [token, setToken] = useState();
  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  // const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  const {setToken} = useContext(UserContext)
  //const navigate = useNavigate();


  // const [username, setUsername] = useState()
  // const [password, setPassword] = useState()
  //set focus on this when component loads

//   useEffect(() => {
//     userRef.current.focus();
// }, [])

  // empty out error messages if user or pw state is changed 



// useEffect(() => {
//     setErrMsg('');
// }, [user, pwd])

const handleSubmit = (e) => {
  e.preventDefault();
  
  const loginUser = async (user, pwd) => {
  fetch('https://bevisible-backend.herokuapp.com/user/signin', {
      method: 'POST',
      // mode: 'cors',
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
      console.log(data)
      setToken(data.accessToken)
      setCookie('token', data.accessToken, 7)
      
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




  // BACKEND SHOULD BE LINKED HERE. with AXIOS? and then you can delete the below:
  // console.log(user, pwd);
 



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
    <button className="btn password" type="submit" value="LOG IN"> Login </button>

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