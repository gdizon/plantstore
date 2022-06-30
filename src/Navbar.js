import home from './home.png';
import info from './info.png';
import shopping from './shopping-cart.png';
import { Link } from 'react-router-dom';






const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="links">
                <Link to="/"><img src={home} width="100"></img></Link>
                <Link to="/aboutus"><img src={info} width="100"></img></Link>
                <Link to="/cart"><img src={shopping} width="100"></img></Link>
            </div>
        </nav>
     );
}
 
export default Navbar;