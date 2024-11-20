import './App.css';
import Navigation from './customer/components/navigation/Navigation';
import HomePages from './customer/pages/HomePage/HomePages';
import Footer from './customer/components/footer/Footer';  

function App() {
  return (
    <div className="App">
      <Navigation/>
      <div>
        <HomePages/>
      </div>
    <Footer/>
    </div>
  );
}

export default App;
