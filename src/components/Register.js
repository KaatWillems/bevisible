import React from 'react';
import Registerform from './features/Registerform'
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom'

// to make difficult PW and usernames: 
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;



const Register = (props) => {

  const userRef =useRef();
  const errRef = useRef();
   
  const [user, setUser] = useState('');
  // to check the validation
    const [validName, setValidName] = useState(false);
    // for focus on input field: 
    const [userFocus, setUserFocus] = useState(false); 

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

// set the focus on input when page loads:
    useEffect(() => {
      userRef.current.focus();
  }, [])


//applied to username, when we validate useraname. anytime it changes it will check the validation of the username:
    useEffect(() => {
      const result = USER_REGEX.test(user);
      console.log(result);
      console.log(user);
      setValidName(result)
    }, [user])

    //useeffect for the password validation
// with match will say if you have a valid match or not between the two entered passwords. 
    useEffect(() => {
      const result = PWD_REGEX.test(pwd);
      console.log(result);
      console.log(pwd);      
      setValidPwd(result);
      const match = pwd === matchPwd;
     setValidMatch(match);
  }, [pwd, matchPwd])

// to display error message. each time user changes the above inputs, the error message will be emputy string again. 
  useEffect(() => {
    setErrMsg('');
}, [user, pwd, matchPwd])


  const handleSubmit = async (e) => {
     e.preventDefault();
    //  REST API NODE JS COMES HERE or do we need axios? 
    // this below then should be deleted: 
    console.log(user, pwd);
    setSuccess(true);
  }



  return (
  	<>
    {success ? (
      <section className='success-page'>
        <h1>Succes!</h1>
        <p> <Link to="/login" className='succes-log'> Log in</Link>  </p>
        <br />
      </section>
    ) : (

    <div className='login-page'> 
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</p>
      
      <h1 className='login-text'> Register </h1> 
    
    
     <div>
    
    <form className="login-form flex flex-col" onSubmit={handleSubmit}>

    <div className="inner-label-wrap">
      <label className="inner-label" htmlFor="username">Name</label>
      <input  
      className="full-width" 
      type="text" 
      id="username" 
      // to set focus:
      ref={userRef}
      autoComplete="off"
      // this ties the input to the user state:
      onChange={(e) => setUser(e.target.value)}
      name="username"
      // for focus:
      onFocus={() => setUserFocus(true)}
      onBlur={() => setUserFocus(false)}
      />
      
            <hr/>
            {/* <p>Must begin with a letter</p> */}

       </div>
    
      <div className="inner-label-wrap">
        <label className="inner-label" htmlFor="password">Password</label>
        <input  className="full-width" 
        type="password"
        id="password"
        // on change ties to usestate
        onChange={(e) => setPwd(e.target.value)}
        onFocus={() => setPwdFocus(true)}
        onBlur={() => setPwdFocus(false)}/>
              <hr/>
              {/* if there is focus, show the directions, otherwise offscreen (=display none) */}
              <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                              
                              8 to 24 characters.<br />
                              Must include uppercase and lowercase letters, a number and a special character.<br />
                              Allowed special characters: !, @, #, $, % 
                          </p>
      </div>


    <div className='inner-label-wrap'>
        <label className="inner-label" htmlFor="confirm_pwd">Confirm Password</label>
        <input className="full-width" 
        type="password" 
        id="confirm_pwd" 
        name="confirm_pwd"
        onChange={(e) => setMatchPwd(e.target.value)}
        value={matchPwd}
        required
        onFocus={() => setMatchFocus(true)}
        onBlur={() => setMatchFocus(false)}/>
      <hr/>
      <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>                           
      Must match the first password input field.
      </p>
    </div>



    <button  disabled={!validName || !validPwd || !validMatch ? true : false} className="btn password" type="submit" value="Register"> Register </button>
    
    <p className="inner-label user">Already registered? <Link to="/login"> Log in!</Link> </p>




     </form> 


  </div>
  


    </div>
    )}
    


    </>
  )
}

export default Register;

// const Register = (props) => {

//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState(''); 

//  // States for checking the errors
//  const [submitted, setSubmitted] = useState(false);
//  const [error, setError] = useState(false);

//  // Handling the name change
//  const handleName = (e) => {
//    setName(e.target.value);
//       setSubmitted(false);
//  };

//  // Handling the email change
//  const handleEmail = (e) => {
//    setEmail(e.target.value);
//    setSubmitted(false);
//  };

//  // Handling the password change
//  const handlePassword = (e) => {
//    setPassword(e.target.value);
//    setSubmitted(false);
//  };

//  // Handling the form submission
//  const handleSubmit = (e) => {
//    e.preventDefault();
//    if (name === '' || email === '' || password === '') {
//      setError(true);
//    } else {
//      setSubmitted(true);
//      setError(false);
//    }
//  };

//   // Showing success message
//   const successMessage = () => {
//    return (
//      <div
//        className="success"
//        style={{
//          display: submitted ? '' : 'none',
//        }}>
//        <p>User {name} successfully registered.</p>
//      </div>
//    );
//  };
//  // Showing error message if error is true
//  const errorMessage = () => {
//    return (
//      <div
//        className="error"
//        style={{
//          display: error ? '' : 'none',
//        }}>
//        <p>Please enter all the fields</p>
//      </div>
//    );
//  };

//  return (
//    <>
   

//    <div className='login-page'> 
//    <h1 className='login-text'> Register </h1> 
//    {/* <Registerform
//     />  */}
//     <div>
   
//    <form className="login-form flex flex-col">

//    <div className="inner-label-wrap">
//      <label className="inner-label" for="email">Name</label>
//      <input onChange={handleName} className="full-width" type="name" id="name" name="name" />
//            <hr/>

//    </div>
   
// <div className="inner-label-wrap">
//      <label className="inner-label" for="email">Email</label>
//      <input onChange={handleEmail} className="full-width" type="email" id="email" name="email"/>
//            <hr/>

//    </div>
//    <div className='inner-label-wrap'>
//      <label className="inner-label" for="password">Password</label>
//      <input onChange={handlePassword} className="full-width" type="password" id="password" name="password" />
//      <hr/>

//    </div>



//    <button onClick={handleSubmit} className="password" type="submit" value="Register"> Register </button>
   
//     </form> 
// {/* Calling to the methods */}
// <div className="messages">
//        {errorMessage()}
//        {successMessage()}
//    </div>

//  </div>
 


//    </div>

   


//    </>
//  )
// }

// export default Register;

