import React from 'react';
import Searchinput from './features/Searchinput'
import Header from './features/Header'
import { Link } from "react-router-dom";
import Card from "./Card"
import Filter from "./features/Filter"
import Navbar from "./features/Navbar"

const Startpage = (props) => {
  return (
    <>
    
    <Header />
    
    <Card />
    <Navbar />
    </>
  )
}

export default Startpage;
