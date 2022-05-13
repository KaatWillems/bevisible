import React from 'react'

function Inputfield(props) {
  return (
    <input type="text" placeholder={(props.placeholder)} className={(props.className)}/>
  )
}

export default Inputfield