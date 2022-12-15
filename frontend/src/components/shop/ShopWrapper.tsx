import React from 'react';
import ProductsShop from './ProductsShop';
import SideBarShop from './SideBarShop';

function ShopWrapper() {
  return (
<div className='container grid lg:grid-cols-4 gap-6 pt-4 pb-16 items-start relative'>
    <SideBarShop/>
    <ProductsShop/>
</div>

  );
}

export default ShopWrapper;