import React from 'react';

function ByCategories() {
  return (
    <div className="container pb-16">
        <h2 className="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6">shop by category</h2>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-3">
            {/* <!-- single category --> */}
            <div className="relative group rounded-sm overflow-hidden" >
                <img src={require('../images/products/product1.jpg')} className="w-full"/>
                <a href="#" className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 flex items-center justify-center text-xl text-white 
                    font-roboto font-medium tracking-wide transition">
                    Bedroom
                </a>
            </div>
            {/* <!-- single category end --> */}
            {/* <!-- single category --> */}
            <div className="relative group rounded-sm overflow-hidden" >
                <img src={require('../images/products/product2.jpg')} className="w-full"/>
                <a href="#" className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 flex items-center justify-center text-xl text-white 
                    font-roboto font-medium tracking-wide transition">
                    Sofa
                </a>
            </div>
            {/* <!-- single category end --> */}
            {/* <!-- single category --> */}
            <div className="relative group rounded-sm overflow-hidden" >
                <img src={require('../images/products/product3.jpg')} className="w-full"/>
                <a href="#" className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 flex items-center justify-center text-xl text-white 
                    font-roboto font-medium tracking-wide transition">
                    Office
                </a>
            </div>
            {/* <!-- single category end --> */}
            {/* <!-- single category --> */}
            <div className="relative group rounded-sm overflow-hidden" >
                <img src={require('../images/products/product4.jpg')} className="w-full"/>
                <a href="#" className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 flex items-center justify-center text-xl text-white 
                    font-roboto font-medium tracking-wide transition">
                    Outdoor
                </a>
            </div>
            {/* <!-- single category end --> */}
            {/* <!-- single category --> */}
            <div className="relative group rounded-sm overflow-hidden" >
                <img src={require('../images/products/product5.jpg')} className="w-full"/>
                <a href="#" className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 flex items-center justify-center text-xl text-white 
                    font-roboto font-medium tracking-wide transition">
                    Mattress
                </a>
            </div>
            {/* <!-- single category end --> */}
            {/* <!-- single category --> */}
            <div className="relative group rounded-sm overflow-hidden" >
                <img src={require('../images/products/product6.jpg')} className="w-full"/>
                <a href="#" className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 flex items-center justify-center text-xl text-white 
                        font-roboto font-medium tracking-wide transition">
                    Dinings
                </a>
            </div>
            {/* <!-- single category end --> */}
        </div>
    </div>
    // <!-- categories end -->

  );
}

export default ByCategories;