// Import CSS
import './App.css';
// Import Links, Routes & Hooks
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
// Import Components
import Store from './component/Store';
import Header from './component/Header';
import Footer from './component/Footer';
import Cart from './component/Cart';
import Item from "./component/Item";
import Nav from './component/Nav';

function App() {
  // create a state to store cart item quantity 
  const [cartQuantity, setCartQuantity] = useState(0);

  return (
    <div className="App">
      {/* Add Nav component and pass down cartQuantity state using props*/}
      <Nav cartQuantity={cartQuantity}/>

      {/* Create routes for all the components */}
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/store" element={<Store />} />
        {/* Pass down state function setCartQuantity to Cart */}
        <Route path="/cart" element={<Cart setCartQuantity = {setCartQuantity}/>} />
        <Route path="/item/:itemId" element={<Item />} />
      </Routes>

      {/* Add Footer component */}
      <Footer />
    </div>
  );
}

export default App;
