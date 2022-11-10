import React from 'react';

const Discount = () => {
    return (
       
            <div className="p-6 py-12 my-12 bg-red-500	text-white">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        <h2 className="text-center text-6xl tracking-tighter font-bold">Up to
                            <br className="sm:hidden" />50% Off
                        </h2>
                        <div className="space-x-2 text-center py-2 lg:py-0">
                            <span>Plus free photo! Use code:</span>
                            <span className="font-bold  text-slate-400  text-lg">Sports</span>
                        </div>
                        <a href="#" rel="noreferrer noopener" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border-double border-4 border-amber-700">Shop Now</a>
                    </div>
                </div>
            </div>
       
    );
};

export default Discount;