
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detailprofilepage from "./components/Detailprofilepage";
import Button from "./components/features/Button";
import Inputfield from "./components/features/Inputfield";
import React from "react"
import Startpage from "./components/Startpage"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Newprofile from "./components/Newprofile";
import Login from "./components/Login"
import Register from  "./components/Register"
import Bookmark from "./components/Bookmark";
import Detailprofilecoach from "./components/Detailprofilecoach"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login/>} /> 
        <Route path="*" element={<div>404 page not found</div>} />
        <Route path="/home" element={<Startpage/>} /> 
        <Route path="/profile" element={<Detailprofilepage/>} />  
        <Route path="/newprofile" element={<Newprofile/>} />  
        <Route path="/login" element={<Login/>} />  
        <Route path="/register" element={<Register/>} />  
        <Route path="/bookmark" element={<Bookmark/>} /> 
        <Route path="/profilecoach" element={<Detailprofilecoach/>} />
      </Routes>
    </BrowserRouter>


 
  );
}

export default App;
