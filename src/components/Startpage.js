import React, {useContext} from 'react';
import {UserContext} from "../App"
import Searchinput from './features/Searchinput'
import Header from './features/Header'
import { Link } from "react-router-dom";
import Card from "./Card"
import Navbar from "./features/Navbar"
import profiledata from './profiledata.json'
import pic1 from '../images/profile1.png'

// import Cardslist from "./Cardslist"
// let Cardslist = profiledata.map((card, index) => {
//   return <Card cardinfo={card} />
// })

const Startpage = (props) => {

 const { token, userInfo, setUserInfo } = useContext(UserContext);


 let Cardslist = profiledata.map((card, index) => {
  return <Card cardinfo={card} key={`card_nbr_${index}`}  />
})

// const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();



    const getAllProfiles = (token) => {
      fetch("https://bevisible-backend.herokuapp.com/user/all", {
        // mode: 'no-cors',
        method:'GET',
        mode: "cors",
         headers:{
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
         }, 
        // body: JSON.stringify({email: user, password: pwd})

      })

      .then(response=> response.json())
      .then((data) => {
      

      // let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyO…zIwfQ.-1Gj84_ZZ7BucNBSm9i90gspoMhge3I7be9E6T5hO6Y"
      //   if (token) {

      //   navigate("/home", { replace: true });

      //   }
        console.log(data)
      })

    }
    getAllProfiles(token)
  }




  return (
    <>
    
    <Header />

    <div className="cards-container"> 
    <button onClick={handleSubmit}> show all</button>
    {Cardslist}
    </div>
    <Navbar />
    </>
  )
}

export default Startpage;
