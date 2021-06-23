import React from 'react';
import { Link } from 'react-router-dom';
import { prodOne, prodTwo, prodThree, prodFour, prodFive, prodSix, prodSeven, prodEight } from './Data';
import { Product } from '../../Product';
import { Footer } from '../../Footer';

export const Products = () => {
    return (
        <>
            <div className="products__bg">
                <div className="products container">
                    <Link to='/product-detail' className='products__link'><Product {...prodOne}/></Link>
                    <Link to='/product-detail' className='products__link'><Product {...prodTwo}/></Link>
                    <Link to='/product-detail' className='products__link'><Product {...prodThree}/></Link>
                    <Link to='/product-detail' className='products__link'><Product {...prodFour}/></Link>
                    <Link to='/product-detail' className='products__link'><Product {...prodFive}/></Link>
                    <Link to='/product-detail' className='products__link'><Product {...prodSix}/></Link>
                    <Link to='/product-detail' className='products__link'><Product {...prodSeven}/></Link>
                    <Link to='/product-detail' className='products__link'><Product {...prodEight}/></Link>
                </div>
            </div>
            <Footer />
        </>
    )
}
