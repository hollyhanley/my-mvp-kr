import React, { useEffect, useState } from "react";
import ArtistList from "../components/ArtistList";
import {getUserId} from "../api/user";

function Dashboard(props) {
    let [artists, setArtists] = useState([]);

  useEffect(() => { 
    getArtists();
  }, []);

// fetch by user id

  async function getArtists() {
    try {
      const user = await getUserId(1);
      console.log({user})
      const params = new URLSearchParams({
        city: user.city,
        style_one: user.style_one,
      })
      let response = await fetch(`/artists?${params}`); //query string params
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