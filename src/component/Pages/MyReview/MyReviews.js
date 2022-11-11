import React, { useEffect, useState } from 'react';

const MyReviews = ({rev} ) => {
    const { name, review, userName} = rev
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch(
            ` https://mywebapps-majharul224.vercel.app/myreviews?userEmail=${reviews?.userEmail}`
        )
            .then((res) => res.json())
            .then((data) => setReviews(data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div >
            <div className="card my-5 bg-slate-300">
                <div className="card-body">
                    <h2 className="card-title">Name :{userName}</h2>
                    <p>{name}</p>
                    <p>{review}</p>
                </div>
            </div>
        </div>
    );
};

export default MyReviews;