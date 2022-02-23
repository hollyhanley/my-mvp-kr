import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar () {
    return (
        <nav className="Navbar">
            <ul>
                <li><NavLink to="/">My Dashboard</NavLink></li>
                <li><NavLink to="/preferences">Preferences</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;