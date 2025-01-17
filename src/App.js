import './App.css';
import Navigation from './customer/components/navigation/Navigation';
import HomePages from './customer/pages/HomePage/HomePages';
import Footer from './customer/components/footer/Footer';  
import Product from './customer/components/Product/Product';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import Cart from './customer/components/Cart/Cart';
import Checkout from './customer/components/Checkout/Checkout';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <div>
        {/* <HomePages/> */}
        {/* <Product/> */}
        {/* <ProductDetails/> */}
        {/* <Cart/> */}
        <Checkout/>
      </div>
    <Footer/>
    </div>
  );
}

export default App;
