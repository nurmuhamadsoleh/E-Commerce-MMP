// import logo from './logo.svg';
import './App.css';
import Navbar from './parts/Navbar';
import Footer from './parts/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductDetail from './pages/ProductDetail';
import ProductLanding from './pages/ProductLanding';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Profile from './pages/Profile';

// import RegisterNext from './pages/RegisterNext';


function App() {  
  return (
    <Router>
      <div className="App">
        <Navbar/>
          <Routes>
            <Route path="/" element={<Homepage />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/product/:id" element={<ProductDetail />}/>
            {/* <Route path="/registernext" element={<RegisterNext/>}/> */}
            <Route path="/allproduct" element={<ProductLanding />}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/checkout" element={<Checkout />}/>
            <Route path="/profile" element={<Profile/>}/>
          </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
