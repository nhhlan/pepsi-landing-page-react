import React, { useState } from 'react';
import { FaTwitter, FaFacebookSquare, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';

export const Footer = () => {
    const [sizeMobile, setSizeMobile] = useState(true);
    const changeSize = () => {
        if(window.innerWidth >= 960){setSizeMobile(false)} else {setSizeMobile(true)}
    }
    window.addEventListener('resize', changeSize);
    
    return (
        <>
            <ul className="social">
                <Link to='/' className='social-icon' target='_blank' aria-label='Twitter'>
                    {sizeMobile ? <FaTwitter size={30}/> : <FaTwitter size={22}/>}
                </Link>
                <Link to='/' className='social-icon' target='_blank' aria-label='Facebook'>
                    {sizeMobile ? <FaFacebookSquare size={30}/> : <FaFacebookSquare size={22}/>}
                </Link>
                <Link to='/' className='social-icon' target='_blank' aria-label='Instagram'>
                    {sizeMobile ? <FaInstagram size={30}/> : <FaInstagram size={22}/>}
                </Link>
                <Link to='/' className='social-icon' target='_blank' aria-label='Youtube'>
                    {sizeMobile ? <FaYoutube size={30}/> : <FaYoutube size={22}/>}
                </Link>
            </ul>
        </>
    )
}
