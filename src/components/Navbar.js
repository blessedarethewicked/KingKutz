import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';

import './Navbar.css';
// import {Button} from './Button'
import { FaBars, FaTimes } from 'react-icons/fa';
// import logo from "..images/logo.jpg"


function Navbar() {
    const [click, setClick] = useState(false);
    // const [button, setButton] = useState(true);
  
    const handleClick = () => setClick(!click);
    // const closeMobileMenu = () => setClick(false);

    const scrow=(value)=>{
        window.scrollTo({ behavior: 'smooth', top: value})
    }
  
    return(
        <IconContext.Provider value={{color:'#fff'}}>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to='/' className='navbar-logo'>
                        <img src={process.env.PUBLIC_URL + "/images/whitenewlogo.png" }
                                className='navbar-logo-image' alt="King Kutz Logo" />

                    </Link>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={()=>scrow(0)}>
                            Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                            to='/'
                            className='nav-links'
                            onClick={()=>scrow(300)}
                            >
                            Services
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                            to='/'
                            className='nav-links'
                            onClick={()=>scrow(1500)}
                            >
                            Gallery
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                            to='/'
                            className='nav-links'
                            onClick={()=>scrow(2600)}
                            >
                            About
                            </Link>
                        </li>

                    </ul>
                    <div className='menu-icon' onClick={handleClick}>
                        {click ? <FaTimes style={{color:"black"}}/> : <FaBars style={{color:"black"}} />}
                    </div>
                </div>
            </nav>

        </IconContext.Provider>
    );
    
}

export default Navbar;
