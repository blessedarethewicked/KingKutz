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
                        <img src={process.env.PUBLIC_URL + "/images/logo.jpg" }
                                className='navbar-logo-image' alt="King Kutz Logo" />

                    </Link>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={()=>scrow(400)}>
                            Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                            to='/'
                            className='nav-links'
                            onClick={()=>scrow(1300)}
                            >
                            Services
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                            to='/'
                            className='nav-links'
                            onClick={()=>scrow(2200)}
                            >
                            Gallery
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                            to='/'
                            className='nav-links'
                            onClick={()=>scrow(3000)}
                            >
                            About
                            </Link>
                        </li>
                        {/* <li className='nav-btn'>
                            {button ? (
                            <Link to='/sign-up' className='btn-link'>
                                <Button buttonStyle='btn--outline'>Book</Button>
                            </Link>
                            ) : (
                            <Link to='/sign-up' className='btn-link'>
                                <Button
                                buttonStyle='btn--outline'
                                buttonSize='btn--mobile'
                                onClick={closeMobileMenu}
                                >
                                Book
                                </Button>
                            </Link>
                            )}
                        </li> */}
                    </ul>
                    <div className='menu-icon' onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                </div>
            </nav>

        </IconContext.Provider>
    );
    
}

export default Navbar;
