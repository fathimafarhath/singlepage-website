import React from 'react'
import {Link} from 'react-scroll'
import logo from '../images/logo1.png'

function Navbar() {
    return (
        <div>
            <nav>
                <Link to="main" className="logo">
                    <img src={logo} alt="logo" />;
                </Link>
                <input className="menu-btn" type="checkbox" id="menu-btn"/>
                <label className="menu-icon" for="menu-btn">
                    <span className="nav-icon"></span>
                </label>
                <ul className="menu">
                    <li><Link to="main" className="active">Home</Link></li>
                    <li><Link to="main">Features</Link></li>
                    <li><Link to="main">Services</Link></li>
                    <li><Link to="main">Subscribe</Link></li>
                    <li><Link to="main">Contact</Link></li>
                </ul>

                <Link to="#" className="hey"> To App</Link>

            </nav>
            
        </div>
    )
}

export default Navbar
