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
      <Navbar/>
      <h1>Welcome to Tattoo Finder</h1>
      <Routes>
        <Route path="/" element ={<Dashboard/>} />
        <Route path="/preferences" element ={<Preferences/>} />
      </Routes>
      
    </div>
  );
}

