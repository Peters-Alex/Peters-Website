import { Link } from "react-router-dom";
import "../Styles/navbar.css";


function Navbar() {

    const handleClick = {
        
    };

    return (
        <>
            <nav className="nav-navbar">
                <div className="nav-navbar-container">
                    {/* <Link to="/" className="navbar-logo">
                        <img className="navbar-logo-img" src="src/Assets/vecteezy_ap-letter-circle-logo-design-with-gold-color_9751044-1.jpg" />
                    </Link> */}
                    <Link to="/" className="nav-links">Home</Link>
                    <Link to="/Portfolio" className="nav-links" >Portfolio</Link> 
                    {/* <Link to="/Resume" className="nav-links" >LinkedIn</Link>  */}
                    
                    {/* <Link to="/Contact" className="nav-links" >Contact</Link>  */}
                    {/* <Link to="/" className="navbar-logo">
                        <img className="navbar-logo-img2" src="src/Assets/vecteezy_ap-letter-circle-logo-design-with-gold-color_9751044-1.jpg" />
                    </Link> */}
                </div>
            </nav>
        </>
    );
}
export default Navbar