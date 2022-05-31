import React, {useContext, useState, useEffect} from 'react';
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

const Startpage = (props) => {

  const [data, setData] = useState(0)
  //console.log(props.id)

 const { token, userInfo, setUserInfo } = useContext(UserContext);

 useEffect(async() => {
      const getAllProfiles = async (token) => {
       let res = await fetch("https://bevisible-backend.herokuapp.com/user/all", {
              // mode: 'no-cors',
              method:'GET',
              //mode: "no-cors",
              headers:{
                "Content-Type": "application/json",
                // 'x-access-token': `Token ${getCookie("token")}`,
                 'x-access-token': ` ${getCookie("token")}`,
              }, 
              // body: JSON.stringify({email: user, password: pwd})
        })

       const json = await res.json()
       const data = await json
       setData(data.data)
       console.log("DATA :", data)



 

          // .then(response=> response.json())
          // .then((data) => {
            
            // let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyO…zIwfQ.-1Gj84_ZZ7BucNBSm9i90gspoMhge3I7be9E6T5hO6Y"
            //   if (token) {
            //   navigate("/home", { replace: true })
            //   }
            
            }
          
           getAllProfiles(token) 
          
        },[]);


// // const navigate = useNavigate();


//  useEffect(() => {
      


//      },[]); 




        // console.log(x.data.profile.about)


//  let Cardslist = data.profile.map((card, index) => {


//   return <Card cardinfo={card} key={`card_nbr_${index}`}  />
// })
 

//  let Cardslist = data.profile.map((card, index) => {
//   return <Card cardinfo={card} key={`card_nbr_${index}`}  />
// })






  return (
    <>
    
    <Header />

    <div className="cards-container"> 
   
    { data === 0 ? "WAITING" : data.map((card, index) => <Card cardinfo={card.profile} key={`card_nbr_${index}`} />)}



    </div>
    <Navbar />
    </>
  )
}

export default Startpage;
