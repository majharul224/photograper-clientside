import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Collection = ({collection}) => {
    const {  _id,name, img, price, descriptio } = collection

    return (
        <div>
          <div className="card w-96 glass">
                <figure><img src={img} className='h-64' alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name :{name}</h2>
                    <p>Description : {descriptio.substring(0, 100) + "..."}</p>
                    <h3>Price : {price}</h3>
                    <div className="card-actions justify-end">
                        <Link to={`/checkout/${_id}`}>
                        <button className="btn btn-primary gap-4 w-full">Detiles
                        <FaArrowRight/>
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Collection;