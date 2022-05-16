import React from 'react'

function Inputfield({onChange, name, value, placeholder, className}) {
  return (
    <input name={name}
     value={value} 
     onChange={onChange} 
     type="text" 
      placeholder={placeholder} 
      className={className}/>
  )
}

export default Inputfield