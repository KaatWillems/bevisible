import React from 'react';
import Searchinput from './features/Searchinput'
import Header from './features/Header'
import { Link } from "react-router-dom";
import Card from "./Card"
import Filter from "./features/Filter"
import Navbar from "./features/Navbar"
import profiledata from './profiledata.json'
import pic1 from '../images/profile1.png'

// import Cardslist from "./Cardslist"
// let Cardslist = profiledata.map((card, index) => {
//   return <Card cardinfo={card} />
// })

const Startpage = (props) => {

 let Cardslist = profiledata.map((card, index) => {
  return <Card cardinfo={card} key={`card_nbr_${index}`}  />
})


  return (
    <>
    
    <Header />
    <div className="cards-container"> 
    {Cardslist}
    </div>
    <Navbar />
    </>
  )
}

export default Startpage;
