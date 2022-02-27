import React, { useState } from "react";

const userObj = {
    id: 1,
    first_name: "Kezi",
    last_name: "Rose",
    pronouns: "She/Her",
    email: "email@email.com",
    city: "",
    style_one: "",
  };

function Home(props) {
    let [user, setUser] = useState(userObj);

 return (
     <div className="Home">
          <h1 className="display-4">InkedIn</h1>
          <h2>The Tattoo Finder</h2>
          
          <a className="btn btn-primary homebutton" href="/explore" role="button">Explore Tattoo Styles</a>
          <a className="btn btn-primary homebutton" href="/preferences" role="button">Find your ideal Tattoo Artist</a>
          <a className="btn btn-primary homebutton" href="/dashboard" role="button">Dashboard</a>
          </div>
        
 )
}

export default Home;