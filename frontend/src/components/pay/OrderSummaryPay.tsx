import React from 'react';
import { NavLink } from 'react-router-dom';
function OrderSummaryPay() {
  return (
    // <!-- order summary -->
    <div className="lg:col-span-4 border border-gray-200 px-4 py-4 rounded mt-6 lg:mt-0">
        <h4 className="text-gray-800 text-lg mb-4 font-medium uppercase">ORDER SUMMARY</h4>
        <div className="space-y-2">
            <div className="flex justify-between" v-for="n in 3">
                <div>
                    <h5 className="text-gray-800 font-medium">Italian Shape Sofa</h5>
                    <p className="text-sm text-gray-600">Size: M</p>
                </div>
                <p className="text-gray-600">x3</p>
                <p className="text-gray-800 font-medium">$320</p>
            </div>
        </div>
        <div className="flex justify-between border-b border-gray-200 mt-1">
            <h4 className="text-gray-800 font-medium my-3 uppercase">Subtotal</h4>
            <h4 className="text-gray-800 font-medium my-3 uppercase">$320</h4>
        </div>
        <div className="flex justify-between border-b border-gray-200">
            <h4 className="text-gray-800 font-medium my-3 uppercase">Shipping</h4>
            <h4 className="text-gray-800 font-medium my-3 uppercase">Free</h4>
        </div>
        <div className="flex justify-between">
            <h4 className="text-gray-800 font-semibold my-3 uppercase">Total</h4>
            <h4 className="text-gray-800 font-semibold my-3 uppercase">$320</h4>
        </div>

        {/* // <!-- agreeement  --> */}
        <div className="flex items-center mb-4 mt-2">
            <input type="checkbox" id="agreement"
                className="text-primary focus:ring-0 rounded-sm cursor-pointer w-3 h-3"/>
            <label htmlFor="agreement" className="text-gray-600 ml-3 cursor-pointer text-sm">
                Agree to our
                <a href="#" className="text-primary">terms & conditions</a>
            </label>
        </div>

        {/* <!-- checkout --> */}
        <NavLink to="./paid" className="bg-primary border border-primary text-white px-4 py-3 font-medium rounded-md uppercase hover:bg-transparent
     hover:text-primary transition text-sm w-full block text-center">
            Place order
        </NavLink>
        {/* <!-- checkout end --> */}
    </div>
    // <!-- order summary end -->
  );
}

export default OrderSummaryPay;