import { Link } from "react-router-dom";
import { List } from "phosphor-react";
import {  } from "phosphor-react";
import { useState } from "react";
import "../Styles/navbar.css";


function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };


    return (
        <>
            <nav className="nav-navbar">
                <div className="nav-navbar-container">
                    <Link to="/" className="navbar-logo">
                        <img className="navbar-logo-img" src="src/Assets/vecteezy_ap-letter-circle-logo-design-with-gold-color_9751044-1.jpg" />
                    </Link>
                    <div className="menu-icon" onClick={toggleDropdown}> 
                    <List />
                    </div>
                    {isDropdownOpen && (
                        <ul className="nav-menu-dropdown">
                            <li className="nav-item">
                                <Link to="/Resume" className="nav-links" onClick={() => setIsDropdownOpen(false)}>Page 1</Link>
                                <Link to="/Account"> </Link>
                            </li>
                        </ul>
                    )}
                </div>
            </nav>
        </>
    );
}
export default Navbar