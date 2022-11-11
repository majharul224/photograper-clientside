import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

import Collection from './Collection';

const ServiceCollection = () => {
    const [collections, setCollection] = useState([])
    useEffect(() => {
        fetch(' https://mywebapps-majharul224.vercel.app/services')
            .then(res => res.json())
            .then(data => setCollection(data))
    }, [])
    return (
       <div>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-20 '>
            {
                collections?.map(collection => <Collection key={collection._id} collection={collection}></Collection>)
            }
        </div>
        <div className='text-center my-12'>
            <Link to='/services'>
                <button className='btn  gap-4 font-bold'> view all
                <FaArrowRight/>
                </button>
            </Link>
        </div>
       </div>
    );
};

export default ServiceCollection;