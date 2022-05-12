import React from 'react';
import Searchinput from './features/Searchinput'
import Header from './features/Header'
import { Link } from "react-router-dom";
import Card from "./Card"


const Startpage = (props) => {
  return (
    <>
    
    <Header />
    <Searchinput  />
    <Card />
    </>
  )
}

export default Startpage;
