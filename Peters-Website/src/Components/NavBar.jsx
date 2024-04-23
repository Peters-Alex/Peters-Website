import { Link } from "react-router-dom";
import "../Styles/navbar.css";
import { List } from "phosphor-react";

function Navbar() {
    return (
        <>
            <nav className="nav-navbar">
                <div className="nav-navbar-container">
                <Link to="/" className="navbar-logo">
                    <img className="navbar-logo-img"src="src/Assets/vecteezy_ap-letter-circle-logo-design-with-gold-color_9751044-1.jpg"/>
                </Link>
                <div className="menu-icon"> <Link/>

                </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar