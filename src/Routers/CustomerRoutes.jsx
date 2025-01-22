import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePages from '../customer/pages/HomePage/HomePages';
import Footer from '../customer/components/footer/Footer';
import Cart from '../customer/components/Cart/Cart';
import Product from '../customer/components/Product/Product';
import Navigation from '../customer/components/navigation/Navigation';
import ProductDetails from '../customer/components/ProductDetails/ProductDetails';
import Checkout from '../customer/components/Checkout/Checkout';
import Order from '../customer/components/Order/Order';
import OrderDetails from '../customer/components/Order/OrderDetails';

const CustomerRoutes = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      
        <Routes>
          <Route path='/' element={<HomePages/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/:lavelOne/:lavelTwo/:lavelThree' element={<Product/>}></Route>
          <Route path='/product/:productId' element={<ProductDetails/>}></Route>
          <Route path='/checkout' element={<Checkout/>}></Route>
          <Route path='/account/order' element={<Order/>}></Route>
          <Route path='/account/order/:orderId' element={<OrderDetails/>}></Route>

          {/* <Cart/> */}
          {/* <Checkout/> */}
          {/* <Order/> */}
        
          </Routes>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default CustomerRoutes