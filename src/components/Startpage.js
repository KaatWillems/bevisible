import React from 'react';
import { useState, useEffect } from "react";
//import Searchinput from './features/Searchinput'
import Header from './features/Header'
//import { Link } from "react-router-dom";
import Card from "./Card"
import Navbar from "./features/Navbar"
import profiledata from './profiledata.json'
import { getDefaultNormalizer } from '@testing-library/react';
//import pic1 from '../images/profile1.png'


 

const Startpage = (props) => {

 let Cardslist = profiledata.map((card, index) => {
  return <Card cardinfo={card} key={`card_nbr_${index}`}  />
})
//FETCH TRY 

  // useEffect(() => {
   
   
  // }, [])

  const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

const getData = async () => {
  try {
      const response = await fetch(
        'https://bevisible-backend.herokuapp.com/user/all'
        //`https://jsonplaceholder.typicode.com/posts?_limit=10`
        , {
          
          method: 'GET',
            mode:'no-cors',
           headers: {
             'Content-Type': 'application/json',
        //     // Authorization: `Token ${token}`,
         }, 
        //  body: JSON.stringify({})
        
          });
        console.log(response)
 
          if (!response.ok) {
            throw new Error(
              `This is an error: The status is ${response.status}`
            );
          }
          let actualData = await response.json();
          setData(actualData);
          setError(null);
          //  CONSOLE LOGGIN THE DATA:
          console.log(actualData)
      } catch(err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
  }

  getData() 

  return (
    <>
 
    <Header />
    <div className="cards-container"> 
    {Cardslist}

    {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}

        {console.log(data)}
        {data && 
          data.map(({ id }) => (
            <div key={id}>
              <p>{id}</p>
            </div>
          )) }


    </div>
    <Navbar />
    </>
  )
}

export default Startpage;
