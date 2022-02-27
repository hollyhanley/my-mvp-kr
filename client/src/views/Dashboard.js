import React, { useEffect, useState } from "react";
import ArtistList from "../components/ArtistList";
import {getUserId} from "../api/user";

const userObj = {
  id: 1,
  first_name: "Kezi",
  last_name: "Rose",
  pronouns: "She/Her",
  email: "email@email.com",
  city: "",
  style_one: "",
};

function Dashboard(props) {
    let [user, setUser] = useState(userObj);
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
          <div className="jumbotron">
          <h2 className="display-4">Hi, {user.first_name}</h2>
          <p className="lead">Here are your recommended Tattoo Artists</p>
          <hr className="my-4"/>
          <p className="lead">
          </p>
          <ArtistList theArtists={artists} />
          </div>
        </div>

        
    );
}

export default Dashboard;