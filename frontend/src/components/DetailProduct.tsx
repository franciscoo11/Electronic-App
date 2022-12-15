import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header';
import Navbar from './Navbar';
import Breadcrum from './shop/Breadcrum';
import ProductView from './detailProduct/ProductView'
import ProductMoreInfo from './detailProduct/ProductMoreInfo'
import RelatedProducts from './detailProduct/RelatedProducts';
import Footer from './Footer';
import Copyright from './Copyright';
function App() {
  return (
    <div>
        <Header/>
        <Navbar/>
        <Breadcrum/>
        <ProductView/>
        <ProductMoreInfo/>
        <RelatedProducts/>
        <Footer/>
        <Copyright/>
    </div>
  );
}

export default App;
