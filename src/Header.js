import { Link } from 'react-router-dom';
import headerImage from './assets/headerImage.jpg'

const Header = () => {
    return (
        <header>
            <img src={headerImage} alt="header image" />
            <div>
                <h1>Welcome to EyeOptical</h1>
                <Link to="/store"><h2>Go to Store</h2></Link>
            </div>
        </header>
    )
}

export default Header;