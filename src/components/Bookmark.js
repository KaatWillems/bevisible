import React from 'react'
import Back from './features/Back'
import Navbar from './features/Navbar'

function Bookmark() {

    // set the bar favo FT code: 

    // const carrouselHearts = document.querySelectorAll(".carousel-heart");

    // const sendBarIdToBrain = (newId) => {
    //   fetch("/api/bookmarks", {
    //     method: "POST", // or 'PUT'
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(newId),
    //   }).catch((error) => {
    //     console.error("Error:", error);
    //   });
    // };
    
    // carrouselHearts.forEach((heart) => {
    //   heart.addEventListener("click", (e) => {
    //     if (heart.classList.length === 2) {
    //       heart.classList.remove("carousel-heart-full");
    //     } else {
    //       heart.classList.add("carousel-heart-full");
    //     }
    //     let object;
    //     if (heart.dataset.action === "add") {
    //       object = { _id: heart.dataset.barid, action: "add" };
    //     } else {
    //       object = { _id: heart.dataset.barid, action: "remove" };
    //     }
    //     sendBarIdToBrain(object);
    //   });
    // });
    


  return (
   <>
   <Back />
        <div className='bookmark-containerr'>
          
            <h1> oh oh busted...</h1>
            <div className='bookmark-pic'></div>
    
        </div>

       






        <Navbar />
   </>
  )
}

export default Bookmark