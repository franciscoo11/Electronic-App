import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className="bg-gray-800 hidden lg:block">
        <div className="container">
            <div className="flex">

                {/* <!-- all category --> */}
                <div className="px-8 py-4 bg-primary flex items-center cursor-pointer group relative">
                    <span className="text-white">
                        <i className="fas fa-bars"></i>
                    </span>
                    <span className="capitalize ml-2 text-white">All categories</span>

                    <div className="absolute left-0 top-full w-full bg-white shadow-md py-3 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition duration-300 z-50 divide-y divide-gray-300 divide-dashed">
                        {/* <!-- single category --> */}
                        <a href="#" className="px-6 py-3 flex items-center hover:bg-gray-100 transition">
                            <img src={require('../images/icons/ICON1.png')} className="w-5 h-5 object-contain"/>
                            <span className="ml-6 text-gray-600 text-sm">circuits</span>
                        </a>
                        {/* <!-- single category end --> */}
                        {/* <!-- single category --> */}
                        <a href="#" className="px-6 py-3 flex items-center hover:bg-gray-100 transition">
                            <img src="images/icons/sofa.svg" className="w-5 h-5 object-contain"/>
                            <span className="ml-6 text-gray-600 text-sm">circuits</span>
                        </a>
                        {/* <!-- single category end --> */}
                        {/* <!-- single category --> */}
                        <a href="#" className="px-6 py-3 flex items-center hover:bg-gray-100 transition">
                            <img src="images/icons/office.svg" className="w-5 h-5 object-contain"/>
                            <span className="ml-6 text-gray-600 text-sm">circuits</span>
                        </a>
                        {/* <!-- single category end --> */}
                        {/* <!-- single category --> */}
                        <a href="#" className="px-6 py-3 flex items-center hover:bg-gray-100 transition">
                            <img src="images/icons/terrace.svg" className="w-5 h-5 object-contain"/>
                            <span className="ml-6 text-gray-600 text-sm">circuits</span>
                        </a>
                        {/* <!-- single category end --> */}
                        {/* <!-- single category --> */}
                        <a href="#" className="px-6 py-3 flex items-center hover:bg-gray-100 transition">
                            <img src="images/icons/bed-2.svg" className="w-5 h-5 object-contain"/>
                            <span className="ml-6 text-gray-600 text-sm">circuits</span>
                        </a>
                        {/* <!-- single category end --> */}
                        {/* <!-- single category --> */}
                        <a href="#" className="px-6 py-3 flex items-center hover:bg-gray-100 transition">
                            <img src="images/icons/restaurant.svg" className="w-5 h-5 object-contain"/>
                            <span className="ml-6 text-gray-600 text-sm">circuits</span>
                        </a>
                        {/* <!-- single category end --> */}
                    </div>
                </div>
                {/* <!-- all category end --> */}

                {/* <!-- nav menu --> */}
                <div className="flex items-center justify-between flex-grow pl-12">
                    <div className="flex items-center space-x-6 text-base capitalize">
                        <a href="index.html" className="text-gray-200 hover:text-white transition">Home</a>
                        <a href="shop.html" className="text-gray-200 hover:text-white transition">Shop</a>
                        <a href="#" className="text-gray-200 hover:text-white transition">About us</a>
                        <a href="#" className="text-gray-200 hover:text-white transition">Contact us</a>
                    </div>
                    <NavLink to='/login' className="ml-auto justify-self-end text-gray-200 hover:text-white transition">
                        Login/Register
                    </NavLink>
                </div>
                {/* <!-- nav menu end --> */}

            </div>
        </div>
    </div>

  );
}

export default Navbar;