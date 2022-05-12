
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detailprofilepage from "./components/Detailprofilepage";
import Button from "./components/features/Button";
import Inputfield from "./components/features/Inputfield";
import Startpage from "./components/Startpage";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Startpage/>} /> 
        <Route path="*" element={<div>404 page not found</div>} />
        <Route path="/detailprofilepage" element={<Detailprofilepage/>} />
        
        
      </Routes>
    </BrowserRouter>

  );
}

export default App;
