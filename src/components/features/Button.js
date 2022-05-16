import React from 'react'

function Button(props) {
  return (
    <button type="submit" className={(props.className)}>{(props.value)}</button>
    
  )
}

export default Button