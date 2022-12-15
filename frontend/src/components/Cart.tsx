import React from 'react';
import CartWrapper from './cart/CartWrapper';
import Copyright from './Copyright';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';
import Breadcrum from './shop/Breadcrum';
function Cart() {
  return (
    <div>
    <Header/>
    <Navbar/>
    <Breadcrum/>
    <CartWrapper/>
    <Footer/>
    <Copyright/>

    </div>
  
  );
}

export default Cart;
