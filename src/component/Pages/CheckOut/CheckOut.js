import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../../Context/hooks/useTitel';
import ReviewsCard from './ReviewsCard';

const CheckOut = () => {
    const detailes = useLoaderData();
    const { user } = useContext(AuthContext)
    
    const { _id, name, img, price, email, descriptio } = detailes
    useTitle('checkout')
    const [reviews, setReviews] = useState([])
    console.log(reviews)
    

    useEffect(() => {
        fetch(
            ` https://mywebapps-majharul224.vercel.app/reviews/${name}`
        )
            .then((res) => res.json())
            .then((data) => setReviews(data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 '>
                <div>
                    <h1 className='text-center text-4xl font-bold text-orange-500'>service detiles</h1>
                    <div className="card lg:card-side bg-base-100 shadow-xl ">
                        <figure ><img src={img} className="h-34 w-full" alt="Album" /></figure>
                        <div className="card-body w-1/2">
                            <h2 className="card-title">{name}</h2>
                            <p>{descriptio}</p>
                            <p>price: $ {price}</p>
                            <p>price: $ {email}</p>
                        </div>
                    </div>
                </div>
                <div className='text-center  font-bold' >
                    <h1>review</h1>
                    <div className='mt-12'>
                        <Link to={`/addReview/${_id}`}>
                            <button className='btn'>Add Review</button>
                        </Link>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3' >
                    {
        reviews.map(rv=><ReviewsCard key={rv._id} rv={rv}></ReviewsCard>)
        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CheckOut;