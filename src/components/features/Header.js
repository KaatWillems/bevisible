import React from 'react';
import { Link } from "react-router-dom";
import Detailprofilepage from "../Detailprofilepage"
import Backedit from './Backedit'

const Header = () => {
    return (
    	<>
    	<Backedit />
    	<div className='header-top flex'>
        <h1> Be Visible</h1> 
        <h2> Find a developer </h2>
        
        </div>
        </>
    );
};


export default Header;
 