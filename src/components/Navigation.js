import React, { useState } from 'react'
import "./Navigation.css";

const Navigation = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className="navbar">
            <div className="brand-title">iBid.</div>
            
        <a href="#0" className="toggle-button" onClick={() => setOpen(!open)}>  {/*toggle button */}
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </a>
            
            <div className={`navbar-links ${open ? 'active' : ''}`}>

                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#0">Auctions</a></li>
                    <li><a href="#0">Vendors</a></li>
                    <li><a href="#0">Media</a></li>
                    <li><a href="#0">Contacts</a></li>
                    <li className="search">

                        <input type="text" placeholder="Search"/>
                            <button className="btn">Search</button>

                </li>
            </ul>
        </div>
    </nav>

            )
}

 export default Navigation
