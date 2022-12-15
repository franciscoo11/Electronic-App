import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Breadcrum from './shop/Breadcrum';
import AccountWrapper from './account/AccountWrapper'
import Footer from './Footer';
import Copyright from './Copyright';
function Account() {
  return (
    <div>
        <Header/>
        <Navbar/>
        <Breadcrum/>
        <AccountWrapper/>
        <Footer/>
        <Copyright/>
    </div>
  );
}

export default Account;
