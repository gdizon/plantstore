import home from './home.png'
import info from './info.png'
import shopping from './shopping-cart.png'






const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="links">
                <a href="/"><img src={home} width="100"></img></a>
                <a href="/aboutus"><img src={info} width="100"></img></a>
                <a href="/cart"><img src={shopping} width="100"></img></a>
            </div>
        </nav>
     );
}
 
export default Navbar;