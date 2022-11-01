// Import CSS
import './App.css';
// Import Components
import Header from './Header';
import Store from './Store';
import Footer from './Footer';

import { useState } from 'react';

function App() {

  const [buttonClick, setButtonClick] = useState(false)
  const handleClick = () => {
    setButtonClick(!buttonClick)
  }
  
  return (
    <div className="App">
      <Header />
      <button onClick={handleClick}>Go To Store</button>
      {
        buttonClick
          ? <Store />
          : null
      }
      <Footer />
    </div>
  );
}

export default App;
