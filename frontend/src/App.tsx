import React from 'react';
import Home from './components/Home';
import Shop from './components/Shop';
import DetailProduct from './components/DetailProduct';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import Account from './components/Account';
import Cart from './components/Cart';
import Pay from './components/Pay';
import OrderPaid from './components/OrderPaid';
function App() {
  return (
    <BrowserRouter>
    <Routes> 
      <Route  path='/home'  element={<Home/>}/>
      <Route  path='/shop'  element={<Shop/>}/>
      <Route path='/detailProduct' element={<DetailProduct/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/account' element={<Account/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/cart/pay' element={<Pay/>}/>
      <Route path='/cart/pay/paid' element={<OrderPaid/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
