import React from 'react';
import img1 from '../../../../images/ima/images1.jpg'
const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className='w-1/2 relative'>
          <img src={img1} className="w-4/5 h-full rounded-lg shadow-2xl" />
         
          </div>
          <div className='w-1/2'>
            <h1 className="text-5xl font-bold">About As!</h1>
            <p className="py-6">Every picture is done in quality, which is some memorable moment.Every picture is done in quality, which is some memorable moment.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default About;