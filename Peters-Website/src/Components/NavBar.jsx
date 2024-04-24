import { Link } from "react-router-dom";
import {  } from "phosphor-react";
import "../Styles/navbar.css";


function Navbar() {



    return (
        <>
            <nav className="nav-navbar">
                <div className="nav-navbar-container">
                    <Link to="/" className="navbar-logo">
                        <img className="navbar-logo-img" src="src/Assets/vecteezy_ap-letter-circle-logo-design-with-gold-color_9751044-1.jpg" />
                    </Link>
                    <Link to="/" className="nav-links">Home</Link>
                    <Link to="/Resume" className="nav-links">Resume</Link> 
                    <Link to="/Portfolio" className="nav-links">Portfolio</Link> 
                    <Link to="/Contact" className="nav-links" >Contact</Link> 
                    <Link to="/" className="navbar-logo">
                        <img className="navbar-logo-img2" src="src/Assets/vecteezy_ap-letter-circle-logo-design-with-gold-color_9751044-1.jpg" />
                    </Link>
                </div>
            </nav>
        </>
    );
}
export default Navbar