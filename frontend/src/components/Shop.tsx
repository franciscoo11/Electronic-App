import React from 'react';
import Copyright from './Copyright';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';
import Breadcrum from './shop/Breadcrum';
import ShopWrapper from './shop/ShopWrapper';

function Shop() {
  return (
    <div >
      <Header/>
      <Navbar/>
        <Breadcrum/>
        <ShopWrapper/>
        <Footer/>
        <Copyright/>
    </div>
  );
}

export default Shop;
