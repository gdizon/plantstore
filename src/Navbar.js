import home from './home.png';
import info from './info.png';
import shopping from './shopping-cart.png';
import { Link } from 'react-router-dom';






const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="links">
                <Link to="/plantstore"><img src={home} width="100"></img></Link>
                <Link to="/plantstore/aboutus"><img src={info} width="100"></img></Link>
                <Link to="/plantstore/cart"><img src={shopping} width="100"></img></Link>
            </div>
        </nav>
     );
}
 
export default Navbar;