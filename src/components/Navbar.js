import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

export const Navbar = () => {
    const [click, setClick] = useState(false);

    const closeMobileMenu = () => setClick(false);
    
    return (
        <>
            <nav className="navbar">
                <div className="navbar__container container">
                    <Link to="/" className="navbar__logo" onClick={closeMobileMenu}>
                        <img src="images/logo-large.png" alt="logo" />
                    </Link>
                    <div className='nav__menu-toggle' onClick={() => setClick(!click)}>
                        {click ? <FaTimes size={30} /> : <FaBars size={30}/>}
                    </div>

                    <ul className={click ? 'nav__menu active' : 'nav__menu'}>
                        <li className="nav__item">
                            <Link to='/products' className="nav__link" onClick={closeMobileMenu}>Products</Link>
                        </li>
                        <li className="nav__item">
                            <Link to='/news' className="nav__link" onClick={closeMobileMenu}>What's News</Link>
                        </li>
                        <li className="nav__item">
                            <Link to='/contact' className="nav__link" onClick={closeMobileMenu}>Contact Us</Link>
                        </li>
                        <li className="nav__item btn-outline">
                            <Link to='/products' className="nav__link" onClick={closeMobileMenu}>Buy Products</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

