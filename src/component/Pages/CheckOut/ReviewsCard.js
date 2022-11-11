import React from 'react';

const ReviewsCard = ({rv}) => {
    const {  name,review, userName } = rv
    console.log(rv);
    return (
        <div >
            <div className="card my-5 bg-slate-300">
                <div className="card-body">
                    <h2 className="card-title">Name :{userName}</h2>
                    <p>serviceName: {name}</p>
                    <p>Reviews :{review}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewsCard;