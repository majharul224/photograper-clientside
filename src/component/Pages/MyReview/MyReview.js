import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import MyReviews from './MyReviews';


const MyReview = () => {
    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])
    
    console.log(reviews);
    useEffect(() => {
        fetch(` https://mywebapps-majharul224.vercel.app/myreviews/${user?.userEmail}`)
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(err => console.log(err))
    }, [user?.userEmail])
    return (
        <div >
            <h1 className='text-red-500'> my review</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-10'>
                {
                    reviews?.map(rev => <MyReviews key={rev._id} rev={rev} >

                    </MyReviews>)
                }
            </div>
        </div>
    );
};

export default MyReview;