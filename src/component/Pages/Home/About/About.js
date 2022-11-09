import React from 'react';
import img1 from '../../../../images/ima/images1.jpg'
const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className='w-1/2 relative'>
          <img src={img1} className="w-4/5 h-full rounded-lg shadow-2xl" />
          {/* <img className="mask mask-parallelogram-2 absolute right-5 top-1/2 w-3/5 border-8 rounded-lg shadow-2xl" src="https://placeimg.com/160/160/arch" /> */}
          </div>
          <div className='w-1/2'>
            <h1 className="text-5xl font-bold">About As!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default About;