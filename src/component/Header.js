// Import Header image 
import headerImage from '../assets/headerImage.jpg'
// Import Links
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        // Header JSX
        <header>
            <img src={headerImage} alt="glasses in front of a building" />
            <div>
                <h1>Welcome to Eye Optical</h1>
                <Link to="/store"><h2>Go to Store</h2></Link>
            </div>
        </header>
    )
}

export default Header;