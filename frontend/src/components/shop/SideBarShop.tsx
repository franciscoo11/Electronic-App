import React from 'react';

function SideBarShop() {
  return (
    // <!-- sidebar -->
    <div
        className="col-span-1 bg-white px-4 pt-4 pb-6 shadow rounded overflow-hidden absolute lg:static left-4 top-16 z-10 w-72 lg:w-full lg:block">
        <div className="divide-gray-200 divide-y space-y-5 relative">
            {/* <!-- category filter --> */}
            <div className="relative">
                <div
                    className="lg:hidden text-gray-400 hover:text-primary text-lg absolute right-0 top-0 cursor-pointer">
                    <i className="fas fa-times"></i>
                </div>
                <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Categories</h3>
                <div className="space-y-2">
                    {/* <!-- single category --> */}
                    <div className="flex items-center">
                        <input type="checkbox" id="Bedroom"
                            className="text-primary focus:ring-0 rounded-sm cursor-pointer accent-primary"/>
                        <label htmlFor="Bedroom" className="text-gray-600 ml-3 cursor-pointer">Bedroom</label>
                        <div className="ml-auto text-gray-600 text-sm">(15)</div>
                    </div>
                    {/* <!-- single category end --> */}
                    {/* <!-- single category --> */}
                    <div className="flex items-center">
                        <input type="checkbox" id="Sofa"
                            className="text-primary focus:ring-0 rounded-sm cursor-pointer accent-primary"/>
                        <label htmlFor="Sofa" className="text-gray-600 ml-3 cursor-pointer">Sofa</label>
                        <div className="ml-auto text-gray-600 text-sm">(05)</div>
                    </div>
                    {/* <!-- single category end --> */}
                    {/* <!-- single category --> */}
                    <div className="flex items-center">
                        <input type="checkbox" id="Office"
                            className="text-primary focus:ring-0 rounded-sm cursor-pointer accent-primary"/>
                        <label htmlFor="Office" className="text-gray-600 ml-3 cursor-pointer">Office</label>
                        <div className="ml-auto text-gray-600 text-sm">(09)</div>
                    </div>
                    {/* <!-- single category end --> */}
                    {/* <!-- single category --> */}
                    <div className="flex items-center">
                        <input type="checkbox" id="Outdoor"
                            className="text-primary focus:ring-0 rounded-sm cursor-pointer accent-primary"/>
                        <label htmlFor="Outdoor" className="text-gray-600 ml-3 cursor-pointer">Outdoor</label>
                        <div className="ml-auto text-gray-600 text-sm">(19)</div>
                    </div>
                    {/* <!-- single category end --> */}
                </div>
            </div>
            {/* <!-- category filter end --> */}
            {/* <!-- brand filter --> */}
            <div className="pt-4">
                <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Brands</h3>
                <div className="space-y-2">
                    {/* <!-- single brand name --> */}
                    <div className="flex items-center">
                        <input type="checkbox" id="Dominik"
                            className="text-primary focus:ring-0 rounded-sm cursor-pointer accent-primary"/>
                        <label htmlFor="Dominik" className="text-gray-600 ml-3 cursor-pointer">Dominik</label>
                        <div className="ml-auto text-gray-600 text-sm">(15)</div>
                    </div>
                    {/* <!-- single brand name end --> */}
                    {/* <!-- single brand name --> */}
                    <div className="flex items-center">
                        <input type="checkbox" id="Karl"
                            className="text-primary focus:ring-0 rounded-sm cursor-pointer accent-primary"/>
                        <label htmlFor="Karl" className="text-gray-600 ml-3 cursor-pointer">Karl</label>
                        <div className="ml-auto text-gray-600 text-sm">(18)</div>
                    </div>
                    {/* <!-- single brand name end --> */}
                    {/* <!-- single brand name --> */}
                    <div className="flex items-center">
                        <input type="checkbox" id="Maxing"
                            className="text-primary focus:ring-0 rounded-sm cursor-pointer accent-primary"/>
                        <label htmlFor="Maxing" className="text-gray-600 ml-3 cursor-pointer">Maxing</label>
                        <div className="ml-auto text-gray-600 text-sm">(09)</div>
                    </div>
                    {/* <!-- single brand name end --> */}
                    {/* <!-- single brand name --> */}
                    <div className="flex items-center">
                        <input type="checkbox" id="Ernest"
                            className="text-primary focus:ring-0 rounded-sm cursor-pointer accent-primary"/>
                        <label htmlFor="Ernest" className="text-gray-600 ml-3 cursor-pointer">Ernest</label>
                        <div className="ml-auto text-gray-600 text-sm">(12)</div>
                    </div>
                    {/* <!-- single brand name end --> */}
                </div>
            </div>
            {/* <!-- brand filter end --> */}
            {/* <!-- price filter --> */}
            <div className="pt-4">
                <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Price</h3>
                <div className="mt-4 flex items-center">
                    <input type="text"
                        className="w-full border-gray-300 focus:ring-0 focus:border-primary px-3 py-1 text-gray-600 text-sm shadow-sm rounded"
                        placeholder="min"/>
                    <span className="mx-3 text-gray-500">-</span>
                    <input type="text"
                        className="w-full border-gray-300 focus:ring-0 focus:border-primary px-3 py-1 text-gray-600 text-sm shadow-sm rounded"
                        placeholder="mix"/>
                </div>
            </div>
            {/* <!-- price filter end --> */}
           

        </div>
    </div>
  );
}

export default SideBarShop;