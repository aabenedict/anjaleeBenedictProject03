// Import Logo image 
import logo from '../assets/logo.png'
// Import Links & Hooks
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Nav = (props) => {
    // create a state watch toggle class
    const [active, setActive] = useState(false)

    // Create click function that updates toggle class state
    const toggleClass = () => {
        setActive(!active)
    }

    return (
        <> 
        {/* Nav Bar */}
        <div className="wrapper">
            <nav>
                <button onClick={toggleClass} className="navIcon fa-solid fa-bars">
                    <p className="sr-only">click here to open slide-out menu</p>
                </button>
                <ul className="navBar">
                    <li className='logo'>
                        <Link to="/"><img src={logo} alt="company logo" /></Link>
                    </li>
                    <ul>
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/store"><li>Store</li></Link>
                        <Link to="/cart"><li>Cart</li></Link>
                        <div className='cartIcon'>
                            <i className="fa-solid fa-cart-shopping"></i> 
                            <p className='cartSpace'>{props.cartQuantity}</p>
                        </div>
                    </ul>
                </ul>
            </nav>
        </div>
        
    {/* Slide-Out Nav */}
        {/* create a ternary that toggles hide show class */}
            <div className={active ? "slideOutNav show" : "slideOutNav hide"} id="slideOutNavElement">
            {/* <div className= "slideOutNav show" id="slideOutNavElement"> */}
            <div onClick={toggleClass} className="buttonContainer">
                    <button>
                        <i className="fa-solid fa-xmark"></i>
                    </button>
            </div> 
            <nav>
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/store"><li>Store</li></Link>
                    <Link to="/cart"><li>Cart</li></Link>
                </ul>
            </nav>
        </div> 
        </>
    )
}

export default Nav;