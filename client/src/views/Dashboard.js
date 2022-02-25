import React, { useEffect, useState } from "react";
import ArtistList from "../components/ArtistList";

function Dashboard(props) {
    let [artists, setArtists] = useState([]);

  useEffect(() => { 
    /* currently loads full artist list. 
    Want to take updated user info with form preferences on this page
    Do a compare of data where artist city, price, style matches users city, price, style
    Would like them in card format to display details with profile pic and photos
    At top of page will be display of user info - Need to set user state?*/
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