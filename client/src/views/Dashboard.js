import React, { useEffect, useState } from "react";
import ArtistList from "../components/ArtistList";

function Dashboard(props) {
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
        <div className="Dashboard">
        <h2>Your suggested Tattoo Artists</h2>
        <ArtistList theArtists={artists} />
        </div>
    );
}

export default Dashboard;