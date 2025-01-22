import './App.css';
import OrderDetails from './customer/components/Order/OrderDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomerRoutes from './Routers/CustomerRoutes';

function App() {
  return (
    <div className="">
      
      <Routes>
        <Route path='/*' element={<CustomerRoutes />}></Route>
      </Routes>

    </div>
  );
}

export default App;
