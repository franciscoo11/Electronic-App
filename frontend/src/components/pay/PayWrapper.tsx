import React from 'react';
import OrderSummaryPay from './OrderSummaryPay';
import PayForm from './PayForm';
function PayWrapper() {
  return (
    <div className='container lg:grid grid-cols-12 gap-6 items-start pb-16 pt-4'>
        <PayForm/>
        <OrderSummaryPay/>
    </div>
  );
}

export default PayWrapper;
