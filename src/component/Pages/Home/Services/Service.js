import React from 'react';

const Service = ({ service }) => {
    console.log(service)
    const {  name, img, price, email, descriptio } = service
    return (
        <div>
            <div className="card w-96 glass">
                <figure><img src={img} className='h-64' alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name :{name}</h2>
                    <p>Description : {descriptio.substring(0, 100) + "..."}</p>
                    <p>Price : {price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary w-full">detiles</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;