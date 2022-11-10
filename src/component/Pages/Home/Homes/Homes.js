import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../Context/hooks/useTitel';
import About from '../About/About';
import Article from '../Article/Article';
import Banner from '../Banner/Banner';
import Carousel from '../Carousel/Carousel';
import Discount from '../Discount/Discount';
// import Service from '../Services/Service';
import Services from '../Services/Services';
import Stats from '../Stats/Stats';


const Homes = () => {
    const items = useLoaderData()
useTitle('home')
    return (
        <div>
            <Banner></Banner>
            <Services items={items}></Services>
            
            <About></About>
            <Article></Article>
            <Carousel></Carousel>
            <Stats></Stats>
            <Discount></Discount>
        </div>
    );
};

export default Homes;