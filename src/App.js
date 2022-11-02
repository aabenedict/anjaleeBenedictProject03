// Import CSS
import './App.css';
// Import Linking and Routing
import { Link, Routes, Route } from 'react-router-dom';
import logo from './assets/logo.png'
import headerImage from './assets/headerImage.jpg'

// Import Components
import Store from './Store';
import Header from './Header';
import Footer from './Footer';
import Cart from './Cart';
import Item from "./Item";

function App() {
  
  return (
    <div className="App">
      <nav>
        <ul className='navBar'>
          <li className='logo'>
            <Link to="/"><img src={logo} alt="company logo" /></Link>
          </li>
          <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/contact"><li>Contact</li></Link>
            <Link to="/cart"><li>Cart</li></Link>
          </ul>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/store" element={<Store />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/item/:itemId" element={<Item />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
