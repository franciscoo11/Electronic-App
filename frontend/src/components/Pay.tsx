import React from 'react';
import Copyright from './Copyright';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';
import PayWrapper from './pay/PayWrapper';
import Breadcrum from './shop/Breadcrum';
function Pay() {
  return (
   
    <div>
 <Header/>
 <Navbar/>
 <Breadcrum/>
 <PayWrapper/>
 <Footer/>
 <Copyright/>
    </div>
  );
}

export default  Pay;
