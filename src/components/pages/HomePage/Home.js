import React from 'react';
import { heroOne } from './Data';
import { Footer } from '../../Footer'
import { Hero } from '../../Hero'

export const Home = () => {
    return (
        <>
            <Hero {...heroOne}/>
            <Footer />
        </>
    )
}
