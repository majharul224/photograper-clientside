import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { FaArrowRight } from 'react-icons/fa';


import 'react-photo-view/dist/react-photo-view.css';

import useTitle from '../../../Context/hooks/useTitel';

const Service = ({ service }) => {
    useTitle('service')
    // console.log(service)
    const { _id, name, img, price, descriptio } = service
    return (
        <div>
            <div className="card w-96 glass">
                <PhotoProvider>
                    <PhotoView src={img}>
                        <figure><img src={img} className='h-64' alt="car!" /></figure>
                    </PhotoView>
                </PhotoProvider>

                <div className="card-body">
                    <h2 className="card-title">Name:{name}</h2>
                    <p>Description : {descriptio}</p>
                    <h3>Price : {price}</h3>
                    <div className="card-actions justify-end">
                        <Link to={`/checkout/${_id}`}>
                            <button className="btn btn-primary gap-4 font-bold w-full">Detiles  
                            <FaArrowRight/>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;