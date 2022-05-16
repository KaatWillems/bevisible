import React from 'react';

const Loginform = ({ className, type, id, placeholder, name, value, onChange  }) => {
  return (
    
				<input 
				className={className} 
				type={type} 
				id={id} 
				placeholder={placeholder}
				name={name}
				value={value}
				onChange={onChange}/>
				   


  )
}

export default Loginform;