
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detailprofilepage from "./components/Detailprofilepage";
import Button from "./components/features/Button";
import Inputfield from "./components/features/Inputfield";
import React from "react"
import Startpage from "./components/Startpage"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Newprofile from "./components/Newprofile";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Startpage/>} /> 
        <Route path="*" element={<div>404 page not found</div>} />
        <Route path="/profile" element={<Detailprofilepage/>} />  
        <Route path="/newprofile" element={<Newprofile/>} />  
      </Routes>
    </BrowserRouter>


 
  );
}

export default App;
