import React from 'react';
import OrderSummary from './OrderSummary';
import ProductCart from './ProductCart';
function CartWrapper() {
  return (
    <div className='container lg:grid grid-cols-12 gap-6 items-start pb-16 pt-4'>
      <ProductCart/>
      <OrderSummary/>
    </div>
  );
}

export default CartWrapper;
