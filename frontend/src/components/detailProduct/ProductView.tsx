import React from 'react';
function App() {
  return (
    // <!-- product view -->
    <div className="container pt-4 pb-6 grid lg:grid-cols-2 gap-6">
        {/* <!-- product image --> */}
        <div>
            <div>
                <img id="main-img" src={require('../../images/products/product1.jpg')} className="w-full"/>
            </div>
            <div className="grid grid-cols-5 gap-4 mt-4">
                <div>
                    <img src={require('../../images/products/product1.jpg')} className="single-img w-full cursor-pointer border border-primary"/>
                </div>
                <div>
                    <img src={require('../../images/products/product1.jpg')} className="single-img w-full cursor-pointer border"/>
                </div>
                <div>
                    <img src={require('../../images/products/product1.jpg')} className="single-img w-full cursor-pointer border"/>
                </div>
                <div>
                    <img src={require('../../images/products/product1.jpg')} className="single-img w-full cursor-pointer border"/>
                </div>
                <div>
                    <img src={require('../../images/products/product1.jpg')} className="single-img w-full cursor-pointer border"/>
                </div>
            </div>
        </div>
        {/* <!-- product image end --> */}
        {/* <!-- product content --> */}
        <div>
            <h2 className="md:text-3xl text-2xl font-medium uppercase mb-2">Italian L Shape Sofa</h2>
            <div className="flex items-center mb-4">
                <div className="flex gap-1 text-sm text-yellow-400">
                    <span><i className="fas fa-star"></i></span>
                    <span><i className="fas fa-star"></i></span>
                    <span><i className="fas fa-star"></i></span>
                    <span><i className="fas fa-star"></i></span>
                    <span><i className="fas fa-star"></i></span>
                </div>
                <div className="text-xs text-gray-500 ml-3">(150 Reviews)</div>
            </div>
            <div className="space-y-2">
                <p className="text-gray-800 font-semibold space-x-2">
                    <span>Availability: </span>
                    <span className="text-green-600">In Stock</span>
                </p>
                <p className="space-x-2">
                    <span className="text-gray-800 font-semibold">Brand: </span>
                    <span className="text-gray-600">Apex</span>
                </p>
                <p className="space-x-2">
                    <span className="text-gray-800 font-semibold">Category: </span>
                    <span className="text-gray-600">Sofa</span>
                </p>
                <p className="space-x-2">
                    <span className="text-gray-800 font-semibold">SKU: </span>
                    <span className="text-gray-600">BE45VGRT</span>
                </p>
            </div>
            <div className="mt-4 flex items-baseline gap-3">
                <span className="text-primary font-semibold text-xl">$450.00</span>
                <span className="text-gray-500 text-base line-through">$500.00</span>
            </div>
            <p className="mt-4 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim exercitationem quaerat excepturi
                labore blanditiis
            </p>
          
            {/* <!-- quantity --> */}
            <div className="mt-4">
                <h3 className="text-base text-gray-800 mb-1">Quantity</h3>
                <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
                    <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">-</div>
                    <div className="h-8 w-10 flex items-center justify-center">4</div>
                    <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">+</div>
                </div>
            </div>
            {/* <!-- color end --> */}
            {/* <!-- add to cart button --> */}
            <div className="flex gap-3 border-b border-gray-200 pb-5 mt-6">
                <a href="#" className="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase 
                    hover:bg-transparent hover:text-primary transition text-sm flex items-center">
                    <span className="mr-2"><i className="fas fa-shopping-bag"></i></span> Add to cart
                </a>
                <a href="#" className="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase 
                    hover:bg-transparent hover:text-primary transition text-sm">
                    <span className="mr-2"><i className="far fa-heart"></i></span> Wishlist
                </a>
            </div>
            {/* <!-- add to cart button end --> */}
            {/* <!-- product share icons --> */}
            <div className="flex space-x-3 mt-4">
                <a href="#"
                    className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#"
                    className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="#"
                    className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                    <i className="fab fa-instagram"></i>
                </a>
            </div>
            {/* <!-- product share icons end --> */}
        </div>
        {/* <!-- product content end --> */}
    </div>
    // <!-- product view end -->
  );
}

export default App;