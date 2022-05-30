
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Detailprofilepage from "./components/Detailprofilepage";
import Button from "./components/features/Button";
import Inputfield from "./components/features/Inputfield";
import React, { createContext, useState, useEffect} from "react"
import Startpage from "./components/Startpage"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Newprofile from "./components/Newprofile";
import Login from "./components/Login"
import Register from  "./components/Register"
import Bookmark from "./components/Bookmark";
import Detailprofilecoach from "./components/Detailprofilecoach"
import Coachdashboard from "./components/Coachdashboard"

export const UserContext = createContext()

export function setCookie(cname, cvalue, exdays) {
  const d = new Date()
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000)
  let expires = 'expires=' + d.toUTCString()
  document.cookie =
    cname + '=' + cvalue + ';' + expires + ';path=/; SameSite=Lax;'
}

function getCookie(cname) {
  let name = cname + '='
  let decodedCookie = decodeURIComponent(document.cookie)
  let ca = decodedCookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) == ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length)
    }
  }
  return null
}



function App() {

const [token, setToken] = useState(getCookie('token'))
const [userInfo, setUserInfo] = useState(null)

// useEffect(() => {
//     async function fetchData() {
//       if (token) {
//         const userData = await fetch('https://bevisible-backend.herokuapp.com/user/profile', {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//            // Authorization: `Token ${token}`,
//             'x-access-token': ` ${getCookie("token")}`,
//           },
//         })
//         .then((res) => res.json())
//         .then((data) => data)
//         .catch(err => console.error(err))
  
//         setUserInfo({
//           id: userData.id,
//           email: userData.email,
//           name: userData.name,
//           title: userData.title,
//           about: userData.about,
//           status: userData.status,
//           tags: userData.tags,
//           work: userData.work,
//           promotion: userData.promotion,
//           education: userData.education,
//           interests: userData.interests,
//           socials: userData.socials,
//         })
//       } else if (!token) {
//         setUserInfo(null)
//       }
//     }
//     fetchData()
//   }, [token])





  return (
    <UserContext.Provider value={{ token, setToken, userInfo }}>
    <Router>

      <Routes>

        <Route index element={<Login/>} /> 
        <Route path="*" element={<div>404 page not found</div>} />
        <Route path="/home" element={<Startpage/>} /> 
        <Route path="/profile" element={token !== null ? <Detailprofilepage/> : <Navigate replace to='/' />} />  
        <Route path="/newprofile" element={<Newprofile/>} />  
        <Route path="/login" element={token !== null ? <Login />: <Navigate replace to='/' />} />  
        <Route path="/register" element={<Register/>} />  
        <Route path="/bookmark" element={<Bookmark/>} /> 
        <Route path="/profilecoach" element={<Detailprofilecoach/>} />
        <Route path="/dashboard" element={<Coachdashboard/>} />
      </Routes>
    </Router>
    </UserContext.Provider>


 
  );
}

export default App;
