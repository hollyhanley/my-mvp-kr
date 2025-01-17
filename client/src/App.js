import React, { useEffect, useState } from "react";
import './App.css';
import Navbar from "./components/Navbar";
import ArtistList from "./components/ArtistList";
import { Routes, Route} from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Preferences from "./views/Preferences";
import Explore from "./views/Explore";
import Home from "./views/Home";
import MapSearch from "./views/MapSearch";
import BristolMapView from "./views/BristolMapView";

export default function App() {

  return (
    <div className="App">
      <Navbar/>
      <div className="container">
      <Routes>
        <Route path="/" element ={<Home/>} />  
        <Route path="explore" element ={<Explore/>} />
        <Route path="/preferences" element ={<Preferences/>} />
        <Route path="/dashboard" element ={<Dashboard/>} />
        <Route path="/mapsearch" element ={<MapSearch/>} />
        <Route path="/bristolmapview" element ={<BristolMapView/>} />
      </Routes>
      </div>
      
    </div>
  );
}

