import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const AddReviwes = () => {
    const detailes = useLoaderData();
    console.log(detailes)
    const { user } = useContext(AuthContext)
   

    const { _id, name, img, price, email, descriptio } = detailes
    const handleReview = (event) => {
        event.preventDefault();
        const review = event.target.review.value;
        const title = detailes.title;
        const serviceImg = detailes.picture;
        const userEmail = user?.email;
        const userName = user?.displayName;
        const userPhoto = user?.photoURL;
        const reviewInfo = {
            name,
            serviceImg,
            review,
            title,
            userEmail,
            userName,
            userPhoto,
        };
        fetch("https://mywebapps-majharul224.vercel.app/review", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(reviewInfo),
        })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((error) => console.log(error));
    };

    return (
        <div>
            <section className="p-6 mt-10 mb-52 dark:text-gray-100">
                <form
                    onSubmit={handleReview}
                    noValidate=""
                    className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-900 ng-untouched ng-pristine ng-valid"
                >
                    <h2 className="w-full text-3xl font-bold leading-tight">
                        {detailes?.title}
                    </h2>
                    <div>
                        <label htmlFor="message" className="block mb-1 ml-1">
                            Add The Review
                        </label>

                        <input className='border' type="text" name="name" id="" placeholder='' />
                        
                        <textarea
                            id="message"
                            type="text"
                            name="review"
                            required
                            placeholder="Add Review ..."
                            className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
                        ></textarea>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-violet-400 focus:ring-violet-400 hover:ring-violet-400 dark:text-gray-900"
                        >
                            Send
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default AddReviwes;