import React from 'react';
import { NavLink } from 'react-router-dom';
function OrderPaidWrapper() {
  return (
    // <!-- order complete wrapper -->
    <div className="max-w-3xl mx-auto px-4 pt-16 pb-24 text-center">
        <div className="mb-8">
            <img src={require('../../../images/icons/complete.png')} className="w-16 inline-block"/>
        </div>
        <h2 className="text-gray-800 font-medium text-3xl mb-3">
            YOUR ORDER IS COMPLETED!
        </h2>
        <p className="text-gray-600 ">
            Thank you for your order! Your order is being processed and will be completed within 3-6 hours. You will
            receive an email confirmation when your order is completed.
        </p>
        <div className="mt-10">
            <NavLink to="/home" className="bg-primary border border-primary text-white px-6 py-3 font-medium rounded-md uppercase hover:bg-transparent
         hover:text-primary transition text-center">Continue shopping</NavLink>
        </div>
    </div>
  );
}

export default OrderPaidWrapper;