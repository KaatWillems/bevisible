import React, {useState} from 'react'

function Button(props) {


  return (
    <button type="submit" className={(props.className)} onClick={props.onClick}>{(props.value)}  </button>
    
  )
}

export default Button