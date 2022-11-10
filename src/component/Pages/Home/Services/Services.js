import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Service from './Service';

const Services = () => {
    const services = useLoaderData()
    // console.log(services)
 
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-20'>
            {
                services?.map(service => <Service
                    key={service._id} service={service} >
                </Service>)
            }
        </div>
    );
};

export default Services;