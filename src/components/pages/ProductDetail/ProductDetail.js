import React from 'react';
import { Footer } from '../../Footer';
import { ProDetail } from '../../ProDetail';
import { prodOne } from '../Products/Data';

export const ProductDetail = () => {
    return (
        <>
            <ProDetail {...prodOne}/>
            <Footer />
        </>
    )
}
