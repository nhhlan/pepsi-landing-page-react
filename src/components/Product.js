import React from 'react';
import './Product.css';

export const Product = ({
    imgSrc, title, alt
}) => {
    return (
        <>
            <div className="product__card">
                <div className="product__card-img">
                    <img src={imgSrc} alt={alt} />
                </div>
                <div className="product__card-text">
                    <h5>{title}</h5>
                </div>
            </div>
        </>
    )
}
