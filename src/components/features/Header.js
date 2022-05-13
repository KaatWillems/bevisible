import React from 'react';
import { Link } from "react-router-dom";
import Detailprofilepage from "../Detailprofilepage"
import Backedit from './Backedit'

import  pic2  from '../../images/logo.png'
import Searchinput from './Searchinput'

const Header = () => {
    return (
    	<>
    	
    	<div className='header-top flex'>

        <img src={ pic2 }/>
       
        <h2 className='header-subtitle'> Find a developer </h2>
        <Searchinput />
        

        </div>
        </>
    );
};


export default Header;
 