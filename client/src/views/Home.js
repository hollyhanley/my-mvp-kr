import React, { useState } from "react";

function Home(props) {

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