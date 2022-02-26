import React, { useEffect, useState } from "react";
import './App.css';
import Navbar from "./components/Navbar";
import ArtistList from "./components/ArtistList";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Preferences from "./views/Preferences";


export default function App() {

  return (
    <div className="App">

    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">InkedIn</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Styles & Preferences</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">My Dashboard</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Sign Out</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>


      <div className="container">
      <Navbar/>
      <Routes>
        <Route path="/" element ={<Dashboard/>} />
        <Route path="/preferences" element ={<Preferences/>} />
      </Routes>
      </div>
      
    </div>
  );
}

