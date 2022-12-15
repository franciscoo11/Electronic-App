import React from 'react';
import { NavLink } from 'react-router-dom';
function Header() {
  return (
    <div className='py-4 shadow-sm bg-pink-100 lg:bg-white'>
         <div className="container flex items-center justify-between">
            {/* <!-- logo --> */}
            <a href="#" className="block w-32">
                <img src={require('../images/logo.svg')} alt="logo" className="w-full"/>
            </a>

            {/* <!-- searchbar --> */}
            <div className="w-full xl:max-w-xl lg:max-w-lg lg:flex relative hidden">
                <span className="absolute left-4 top-3 text-lg text-gray-400">
                    <i className="fas fa-search"></i>
                </span>
                <input type="text"
                    className="pl-12 w-full border border-r-0 border-primary py-3 px-3 rounded-l-md focus:ring-primary focus:border-primary"
                    placeholder="search"/>
                <button type="submit"
                    className="bg-primary border border-primary text-white px-8 font-medium rounded-r-md hover:bg-transparent hover:text-primary transition">
                    Search
                </button>
            </div>
            {/* <!-- searchbar end --> */}

            {/* <!-- navicons --> */}
            <div className="space-x-4 flex items-center">
                <a href="wishlist.html" className="block text-center text-gray-700 hover:text-primary transition relative">
                    <span
                        className="absolute -right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">10</span>
                    <div className="text-2xl">
                        <i className="far fa-heart"></i>
                    </div>
                    <div className="text-xs leading-3">Wish List</div>
                </a>
                <NavLink to="/cart"
                    className="lg:block text-center text-gray-700 hover:text-primary transition hidden relative">
                    <span
                        className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">3</span>
                    <div className="text-2xl">
                        <i className="fas fa-shopping-bag"></i>
                    </div>
                    <div className="text-xs leading-3">Cart</div>
                </NavLink>
                <NavLink to="/account" className="block text-center text-gray-700 hover:text-primary transition">
                    <div className="text-2xl">
                        <i className="far fa-user"></i>
                    </div>
                    <div className="text-xs leading-3">Account</div>
                </NavLink>
            </div>
            {/* <!-- navicons end --> */}

        </div>
    </div>
  );
}

export default Header;
