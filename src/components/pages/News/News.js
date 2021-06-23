import React from 'react'
import { heroTwo } from './Data';
import { Hero } from '../../Hero'
import { Social } from '../../Social';

export const News = () => {
    return (
        <>
            <Social />
            <Hero {...heroTwo}/>
        </>
    )
}

