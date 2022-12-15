import React from 'react';
import Copyright from './Copyright';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';
import OrderPaidWrapper from './pay/orderPaid/OrderPaidWrapper';
import Breadcrum from './shop/Breadcrum';
function OrderPaid() {
  return (
    <div>
        <Header/>
        <Navbar/>
        <Breadcrum/>
        <OrderPaidWrapper/>
        <Footer/>
        <Copyright/>
    </div>
  );
}

export default OrderPaid;
