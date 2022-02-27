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
          <div className="jumbotron">
          <h2 className="display-4">Hi, {user.first_name}</h2>
          <p className="lead">Welcome to InkedIn</p>
          <hr className="my-4"/>
          <p className="lead">
          </p>
          <a className="btn btn-primary homebutton" href="/explore" role="button">Explore Tattoo Styles</a>
          <a className="btn btn-primary homebutton" href="/preferences" role="button">Find your ideal Tattoo Artist</a>
          <a className="btn btn-primary homebutton" href="/dashboard" role="button">Dashboard</a>
          </div>
        </div>
 )
}

export default Home;