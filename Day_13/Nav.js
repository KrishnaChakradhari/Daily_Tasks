
import { Link } from 'react-router-dom';
import logo from './logo.png';

const NavBar = () => {
    return (
        <>

        <div className='topheader'><img src={logo} alt="Description of the image" /></div>
        <div className='nav'>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
        </div>
        </>
    );
};

export default NavBar;
