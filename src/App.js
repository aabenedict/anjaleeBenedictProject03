// Import CSS
import './App.css';
// Import Linking and Routing
import { Link, Routes, Route } from 'react-router-dom';

// Import Components
import Store from './Store';
import Footer from './Footer';
import Cart from './Cart';
import Item from "./Item";

function App() {
  
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/"><img src="" alt="" /></Link>
            </li>
            <ul>
              <Link to="/"><li>Home</li></Link>
              <Link to="/contact"><li>Contact</li></Link>
              <Link to="/cart"><li>Cart</li></Link>
            </ul>
          </ul>
        </nav>
        <h1>Welcome to EyeOptical</h1>
      </header>
      
      <Routes>
        <Route path="/" element={<Store/>} /> 
        <Route path="/cart" element={<Cart/>} />
        <Route path="/item/:itemId" element={<Item/>} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
