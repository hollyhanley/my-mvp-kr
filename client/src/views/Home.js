import React, { useState } from "react";
import './home.css';
function Home(props) {

 return (
     <div className="Home">

         <div class="split right">
        <h1 className="display-4">InkedIn</h1>
        <h2>The Tattoo Finder</h2>
        <a className="btn btn-primary homebutton" href="/explore" role="button">Explore Tattoo Styles</a>
        <br></br>
        <a className="btn btn-primary homebutton" href="/preferences" role="button">Find your ideal Tattoo Artist</a>
        <br></br>
        <a className="btn btn-primary homebutton" href="/dashboard" role="button">Dashboard</a>
        </div>

        <div class="split left">
        <div class="centered">
            <img src="https://images.unsplash.com/photo-1482375702222-03a768d5ea3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="Avatar man"/>
        </div>
        </div>
    </div>
 )
}

export default Home;