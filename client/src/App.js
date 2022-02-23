import React, { useEffect, useState } from "react";
import './App.css';
import Navbar from "./components/Navbar";
import ArtistList from "./components/ArtistList";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Preferences from "./views/Preferences";


export default function App() {
  let [artists, setArtists] = useState([]);

  useEffect(() => {
    getArtists();
  }, []);

  async function getArtists() {
    try {
      let response = await fetch("/artists");
      if (response.ok) {
        let artists = await response.json();
        setArtists(artists);
      } else {
        console.log("Server error:", response.statusText);
      }
    } catch (err) {
      console.log("Network error:", err.message);
    }
  }

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element ={<Dashboard/>} />
        <Route path="/preferences" element ={<Preferences/>} />
      </Routes>
      <h1>Welcome to Tattoo Finder</h1>
      <ArtistList theArtists={artists} />
    </div>
  );
}
