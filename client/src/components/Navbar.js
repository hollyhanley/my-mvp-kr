import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar () {
    return (
       <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <a className="navbar-brand" href="/">InkedIn</a>
        <div className="navbar-nav">
          <a className="nav-item nav-link" href="/explore">Explore <span className="sr-only"></span></a>
          <a className="nav-item nav-link" href="/preferences">Preferences</a>
          <a className="nav-item nav-link" href="/dashboard">My Dashboard</a>
          <a className="nav-item nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Sign Out</a>
        </div>
        
      </nav>
    );
}

export default Navbar;