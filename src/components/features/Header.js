import React from 'react';
import { Link } from "react-router-dom";
import Detailprofilepage from "../Detailprofilepage"
import Backedit from './Backedit'
import Searchinput from './Searchinput'

const Header = () => {
    return (
    	<>
    	
    	<div className='header-top flex'>
        <Backedit />
        <h1> Be Visible</h1> 
        <h2> Find a developer </h2>
        <Searchinput />
        </div>
        </>
    );
};


export default Header;
 