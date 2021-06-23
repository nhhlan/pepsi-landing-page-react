import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

export const Hero = ({
    headline1, headline2, headline3, description, linkClass, linkDesc, imgSrc, imgAlt, imgWidth, heroImg
}) => {
    return (
        <>
            <div className={heroImg ? 'hero container' : 'hero container hero__small'}>
                <div className="hero__text" style={{paddingTop: heroImg ? '' : '2rem', order: heroImg ? '2' : '1'}}>
                    <h2 className={heroImg ? 'hero__fontSmall' : 'hero__fontBig'}><span>{headline1}</span><span className={heroImg ? '' : 'hero__text-span'}>{headline2}</span><span>{headline3}</span></h2>
                    <p>{description}</p>
                    <Link to='/products' className={linkClass}>{linkDesc}</Link>
                </div>
                <div className={heroImg ? 'hero__img' : 'hero__img hero__img-news'} style={{width: imgWidth === 'small' ? '60%' : '100%', order: heroImg ? '1' : '2'}}>
                    <img src={imgSrc} alt={imgAlt}/>                 
                </div>
            </div> 
        </>
    )
}
