import React from 'react';
import { useLoaderData } from 'react-router-dom';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Carousel from '../Carousel/Carousel';
import Discount from '../Discount/Discount';
// import Service from '../Services/Service';
import Services from '../Services/Services';
import Stats from '../Stats/Stats';


const Homes = () => {
    const items = useLoaderData()

    return (
        <div>
            <Banner></Banner>
            <Services items={items}></Services>
            
            <About></About>
            <Carousel></Carousel>
            <Stats></Stats>
            <Discount></Discount>
        </div>
    );
};

export default Homes;