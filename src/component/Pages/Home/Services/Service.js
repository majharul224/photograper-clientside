import React from 'react';

const Service = ({ service }) => {
    console.log(service)
    const { _id, name, img, price, email, descriptio } = service
    return (
        <div>
            <div className="card w-96 glass">
                <figure><img src={img} className='h-64' alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{descriptio.substring(0, 100) + "..."}</p>
                    <p>{price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary w-full">detiles</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;