import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar () {
    return (
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/">InkedIn</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link" href="/explore">Explore <span className="sr-only"></span></a>
      <a className="nav-item nav-link" href="/preferences">Preferences</a>
      <a className="nav-item nav-link" href="/dashboard">My Dashboard</a>
      <a className="nav-item nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Sign Out</a>
    </div>
  </div>
</nav>


 // <nav className="Navbar">
        //     <ul>
        //         <li><NavLink to="/">Explore Tattoo Styles</NavLink></li>
        //         <li><NavLink to="/dashboard">My Dashboard</NavLink></li>
        //         <li><NavLink to="/preferences">Preferences</NavLink></li>
        //     </ul>
        // </nav>


    );
}

export default Navbar;