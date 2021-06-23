import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebookSquare, FaInstagram, FaYoutube } from 'react-icons/fa';
import './Social.css';


export const Social = () => {
    return (
        <>
            <div className="socialSection__bg">
                <div className="socialSection container">
                    <h2>Stay on the Pulse. Follow Pepsi.</h2>
                    <div className="socialSection__holder">
                        <Link to='/' className='socialSection__link' target='_blank' aria-label='Twitter'>
                            <img src="images/social-twitter.png" alt="twitter" />
                            <FaTwitter className='socialSection__icon' size={25}/>
                        </Link>
                        <Link to='/' className='socialSection__link' target='_blank' aria-label='Facebook'>
                            <img src="images/social-facebook.png" alt="facebook" />
                            <FaFacebookSquare className='socialSection__icon' size={25}/>
                        </Link>
                        <Link to='/' className='socialSection__link' target='_blank' aria-label='Instagram'>
                            <img src="images/social-instagram.png" alt="instagram" />
                            <FaInstagram className='socialSection__icon' size={25}/>
                        </Link>
                        <Link to='/' className='socialSection__link' target='_blank' aria-label='Youtube'>
                            <img src="images/social-youtube.png" alt="youtube" />
                            <FaYoutube className='socialSection__icon' size={25}/>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </>
    )
}
